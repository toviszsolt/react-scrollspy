import { useEffect, useRef, useState } from 'react';

const useScrollObserver = ({
  ids = [],
  root = null,
  rootMargin = '0px',
  threshold = [0, 0.25, 0.5, 0.75, 1],
  onChangeActiveId,
}) => {
  const [activeLink, setActiveLink] = useState(null);
  const ratiosRef = useRef({});
  const idsKey = ids.join(',');
  const thresholdKey = JSON.stringify(threshold);

  const onChangeActiveIdRef = useRef(onChangeActiveId);
  useEffect(() => {
    onChangeActiveIdRef.current = onChangeActiveId;
  }, [onChangeActiveId]);

  useEffect(() => {
    const stableIds = idsKey ? idsKey.split(',') : [];
    const stableThreshold = JSON.parse(thresholdKey);

    if (stableIds.length === 0) return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        ratiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      let maxRatio = 0.1;
      let maxId = null;

      stableIds.forEach((id) => {
        const ratio = ratiosRef.current[id] || 0;
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxId = id;
        }
      });

      setActiveLink((prevActiveLink) => {
        if (maxId !== prevActiveLink) {
          if (maxId && typeof onChangeActiveIdRef.current === 'function') {
            onChangeActiveIdRef.current(maxId, prevActiveLink);
          }
          return maxId;
        }
        return prevActiveLink;
      });
    };

    const optionsObserver = { root, rootMargin, threshold: stableThreshold };
    const observer = new IntersectionObserver(handleIntersection, optionsObserver);

    stableIds.forEach((id) => {
      const content = document.getElementById(id);
      if (content) observer.observe(content);
    });

    return () => {
      observer.disconnect();
    };
  }, [idsKey, root, rootMargin, thresholdKey]);

  return { activeLink };
};

export default useScrollObserver;
