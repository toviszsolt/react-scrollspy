import React from 'react';

declare function ScrollSpy(props: {
  /**
   * Class name to be applied to the active link
   * @default '' - empty string
   */
  activeClass?: string;

  /**
   * If true, the active link will have an attribute `data-active` attached to it.
   * @default false
   */
  activeAttr?: boolean;

  /**
   * Offset from top the final scroll position in pixels
   * @uses Element: scrollTo()
   * @default 0
   */
  offsetTop?: number;

  /**
   * Offset from left the final scroll position in pixels
   * @uses Element: scrollTo()
   * @default 0
   */
  offsetLeft?: number;

  /**
   *  Behavior of the scroll animation.
   * @uses Element: scrollTo()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#options
   * @default 'smooth'
   */
  behavior?: 'smooth' | 'instant' | 'auto';

  /**
   * Root element to be observed.
   * @uses ntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default null
   */
  root?: HTMLElement | null;

  /**
   * Root margin for the intersection observer.
   * @uses ntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default '0px 0px 0px 0px'
   */
  rootMargin?: string;

  /**
   * Thresholds for the intersection observer.
   * @uses ntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default [0, 0.25, 0.5, 0.75, 1]
   */
  threshold?: number | number[];

  /** Callback fired when an element is clicked. */
  onClickEach?: (
    /** Cliick event */
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,

    /** Function that will be called internally */
    clickHandler: () => void,

    /** Container element that is being scrolled */
    container: HTMLElement,
  ) => void;
  children?: React.ReactNode;
}): JSX.Element;

export default ScrollSpy;
