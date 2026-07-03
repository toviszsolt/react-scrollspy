export const findScrollContainer = (el) => {
  if (!el) return document.scrollingElement || document.documentElement;
  if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) return el;
  if (el.parentElement) return findScrollContainer(el.parentElement);
  return document.scrollingElement || document.documentElement;
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
