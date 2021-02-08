'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/* eslint-disable no-undef */
const ScrollSpy = ({
  className = 'active',
  offsetTop = 0,
  offsetLeft = 0,
  duration = 1000,
  children,
}) => {
  (0, _react.useEffect)(() => {
    const sourceElements = [];
    const targetElements = [];
    let pendingScroll;

    const throttle = (fn, wait = 100) => {
      let timer;
      let time = Date.now();
      return (params) => {
        clearTimeout(timer);

        if (time + wait - Date.now() < 0) {
          fn(params);
          time = Date.now();
        } else {
          timer = setTimeout(fn, wait / 5);
        }
      };
    };

    const onScrollHandler = throttle(() => {
      const scrollElement = document.scrollingElement || document.documentElement;
      const center = {
        x: scrollElement.scrollLeft + window.innerWidth / 2,
        y: scrollElement.scrollTop + window.innerHeight / 2,
      };
      sourceElements.map((source, i) => {
        const target = targetElements[i];
        const visibleHorizontal =
          target.offsetLeft >= 0 &&
          center.x >= target.offsetLeft &&
          center.x < target.offsetLeft + target.offsetWidth;
        const visibleVertical =
          target.offsetTop >= 0 &&
          center.y >= target.offsetTop &&
          center.y < target.offsetTop + target.offsetHeight;

        if (visibleVertical && visibleHorizontal) {
          source.classList.add(className);
        } else {
          source.classList.remove(className);
        }

        return true;
      });
    });

    const onClickHandler = (event, targetTop, targetLeft, targetDuration) => {
      event.preventDefault();
      if (pendingScroll) return true;
      pendingScroll = true;
      const scrollElement = document.scrollingElement || document.documentElement;
      const scrollLimit = {
        x: Math.max(0, scrollElement.scrollWidth - window.innerWidth),
        y: Math.max(0, scrollElement.scrollHeight - window.innerHeight),
      };
      const scrollToPosition = {
        x: Math.min(Math.max(0, targetLeft), scrollLimit.x),
        y: Math.min(Math.max(0, targetTop), scrollLimit.y),
      };
      const diff = {
        x: Math.round(scrollToPosition.x - scrollElement.scrollLeft),
        y: Math.round(scrollToPosition.y - scrollElement.scrollTop),
      };
      const step = {
        x: Math.round(((diff.x / Math.abs(targetDuration)) * 1000) / 16),
        y: Math.round(((diff.y / Math.abs(targetDuration)) * 1000) / 16),
      };

      const tick = (scrollTop, scrollLeft = 0) => {
        const diffTick = {
          x: Math.round(scrollToPosition.x - scrollElement.scrollLeft),
          y: Math.round(scrollToPosition.y - scrollElement.scrollTop),
        };

        if (diffTick.x === 0 && diffTick.y === 0) {
          pendingScroll = false;
          return true;
        }

        if (Math.abs(diffTick.x) > 0) {
          scrollElement.scrollLeft += Math.abs(step.x) < Math.abs(diffTick.x) ? step.x : diffTick.x;
        }

        if (Math.abs(diffTick.y) > 0) {
          scrollElement.scrollTop += Math.abs(step.y) < Math.abs(diffTick.y) ? step.y : diffTick.y;
        }

        return requestAnimationFrame(() => tick(scrollTop, scrollLeft));
      };

      return tick(scrollToPosition);
    };

    children.map((el) => {
      const href = el.props && el.props.href;
      const self = el.ref && el.ref.current;

      if (!self || !href || href.charAt(0) !== '#') {
        return false;
      }

      const targetElement = href === '#' ? document.body : document.querySelector(href);

      if (targetElement) {
        self.onclick = (
          e, // eslint-disable-next-line implicit-arrow-linebreak
        ) =>
          onClickHandler(
            e,
            targetElement.offsetTop - offsetTop,
            targetElement.offsetLeft - offsetLeft, // eslint-disable-next-line comma-dangle
            duration,
          );

        targetElements.push(targetElement);
        sourceElements.push(self);
      }

      return true;
    });

    if (targetElements.length) {
      const ScrollEvent = new Event('scroll');
      window.addEventListener('scroll', onScrollHandler, {
        passive: true,
      });
      window.dispatchEvent(ScrollEvent);
    }

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, [children, className, duration, offsetTop, offsetLeft]);
  return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
};

var _default = ScrollSpy;
exports.default = _default;
