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
   * Offset the final scroll position from top in pixels
   * @uses Element: scrollTo()
   * @default 0
   */
  offsetTop?: number;

  /**
   * Offset the final scroll position from left in pixels
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
   * Root element for the intersection observer.
   * @uses IntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default null
   */
  root?: HTMLElement | null;

  /**
   * Root margin for the intersection observer.
   * @uses IntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default '0px 0px 0px 0px'
   */
  rootMargin?: string;

  /**
   * Thresholds for the intersection observer.
   * @uses IntersectionObserver: IntersectionObserver()
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
   * @default [0, 0.25, 0.5, 0.75, 1]
   */
  threshold?: number | number[];

  /** Callback function for handle the click event */
  onClickEach?: (
    /** The original click event */
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,

    /** The internal function that scrolls to the element */
    internalClickHandler: () => void,

    /** Container element that is being scrolled */
    container: HTMLElement,
  ) => void;

  /** Callback function for handle the active element change event */
  onChangeActiveId?(
    /** The id of the active element */
    currentId: string | null,

    /** The id of previous active element */
    prevId: string | null,
  ): void;

  children?: React.ReactNode;
}): JSX.Element;

export default ScrollSpy;
