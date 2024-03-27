export const findScrollContainer = (el) => {
  if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) {
    return el;
  } else if (el.parentElement) {
    return findScrollContainer(el.parentElement);
  } else {
    return document.scrollingElement || document.documentElement;
  }
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
