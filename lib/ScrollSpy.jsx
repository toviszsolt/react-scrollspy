import React, { Children } from 'react';
import useScrollObserver from './useScrollObserver.jsx';
import { findScrollContainer } from './utils.js';

const ScrollSpy = ({
  activeClass = '',
  activeAttr = false,
  offsetTop = 0,
  offsetLeft = 0,
  behavior = 'smooth',
  root = null,
  rootMargin = '0px',
  threshold = [0, 0.25, 0.5, 0.75, 1],
  onClickEach = null,
  children = null,
}) => {
  const { idsRef, activeLink } = useScrollObserver({ root, rootMargin, threshold });

  const modifiedChildren = (children) => {
    return Children.map(children, (child) => {
      const { type, props } = child;
      const { href, className, onClick: childOnClick } = props || {};

      if (type === ScrollSpy) return child;

      if (type === 'a' && href && href.startsWith('#')) {
        const id = href.slice(1);
        const isActive = id === activeLink;

        if (!idsRef.current.find((el) => el.id === id)) {
          idsRef.current.push({ id, ratio: 0 });
        }

        return React.cloneElement(child, {
          className: isActive ? [className, activeClass].join(' ') : className,
          ['data-active']: activeAttr ? isActive : null,
          onClick: (e) => {
            e.preventDefault();

            if (typeof childOnClick === 'function') {
              childOnClick(e);
            }

            const content = document.getElementById(id);
            const container = findScrollContainer(content);

            const clickHandlerInternal = () => {
              container.scrollTo({
                top: content.offsetTop - container.offsetTop - offsetTop,
                left: content.offsetLeft - container.offsetLeft - offsetLeft,
                behavior,
              });
            };

            if (typeof onClickEach === 'function') {
              onClickEach(e, clickHandlerInternal, container);
            } else {
              clickHandlerInternal();
            }
          },
        });
      }

      if (props && props.children) {
        return React.cloneElement(child, {
          ...props,
          children: modifiedChildren(props.children),
        });
      }

      return child;
    });
  };

  return <>{modifiedChildren(children)}</>;
};

export default ScrollSpy;
