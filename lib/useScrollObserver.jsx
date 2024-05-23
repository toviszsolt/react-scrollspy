/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

const useScrollObserver = ({ root, rootMargin, threshold, onChangeActiveId }) => {
  const [activeLink, setActiveLink] = useState(null);
  const idsRef = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const ref = idsRef.current.find((el) => el.id === id);
        if (ref) ref.ratio = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      const maxRatio = Math.max(...idsRef.current.map((el) => el.ratio), 0.1);
      const entry = idsRef.current.find((el) => el.ratio === maxRatio);

      setActiveLink(entry && entry.id);

      if (entry && entry.id && activeLink !== entry.id && typeof onChangeActiveId === 'function') {
        onChangeActiveId(entry.id, activeLink);
      }
    };

    const optionsObserver = { root, rootMargin, threshold };
    const observer = new IntersectionObserver(handleIntersection, optionsObserver);

    idsRef.current.forEach(({ id }) => {
      const content = document.getElementById(id);
      content && observer.observe(content);
    });

    return () => {
      observer.disconnect();
    };
  }, [idsRef, root, rootMargin, threshold]);

  return { idsRef, activeLink };
};

export default useScrollObserver;
