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
  onChangeActiveId = null,
  children = null,
}) => {
  const detectedIds = [];

  const collectIds = (children) => {
    Children.forEach(children, (child) => {
      if (!child) return;
      const { type, props } = child;
      const { href } = props || {};

      if (type === 'a' && href && href.startsWith('#')) {
        const id = href.slice(1);
        if (!detectedIds.includes(id)) {
          detectedIds.push(id);
        }
      }
      if (props && props.children) {
        collectIds(props.children);
      }
    });
  };
  collectIds(children);

  const { activeLink } = useScrollObserver({
    ids: detectedIds,
    root,
    rootMargin,
    threshold,
    onChangeActiveId,
  });

  const modifiedChildren = (children) => {
    return Children.map(children, (child) => {
      if (!child) return child;
      const { type, props } = child;
      const { href, className, onClick: childOnClick } = props || {};

      if (type === ScrollSpy) return child;

      if (type === 'a' && href && href.startsWith('#')) {
        const id = href.slice(1);
        const isActive = id === activeLink;

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
