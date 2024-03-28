![Poster](assets/poster.png)

# ScrollSpy React Component

[![GitHub License](https://img.shields.io/github/license/toviszsolt/react-scrollspy?style=flat)](https://github.com/toviszsolt/react-scrollspy/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/react-scrollspy-navigation?style=flat&color=red)](https://www.npmjs.com/package/react-scrollspy-navigation)
[![GitHub Repo stars](https://img.shields.io/github/stars/toviszsolt/react-scrollspy?color=DAAA3F)](https://github.com/toviszsolt/react-scrollspy/stargazers)
[![Run tests](https://github.com/toviszsolt/react-scrollspy/actions/workflows/main.yml/badge.svg)](https://github.com/toviszsolt/react-scrollspy/actions/workflows/main.yml)
[![NPM Downloads](https://img.shields.io/npm/dw/react-scrollspy-navigation?style=flat)](https://www.npmjs.com/package/react-scrollspy-navigation)
[![Sponsor](https://img.shields.io/static/v1?label=sponsor&message=❤&color=ff69b4)](https://github.com/sponsors/toviszsolt)

React Component, that automatically update navigation components based on scroll position to indicate which link is
currently active in the viewport. It also scrolls (navigation) to viewport when click on a navigation component.

**[Demo with example code](https://32jhvk.csb.app)**

**[Sponsor me on GitHub](https://github.com/sponsors/toviszsolt)**

**[Sponsor me on PayPal](https://paypal.me/toviszsolt)**

## How to install

Install via NPM or Yarn package manager

```
npm i react-scrollspy-navigation
```

```
yarn add react-scrollspy-navigation
```

## How to use it

### Step 1: Content

Add a unique `id` to content blocks or heading tags for the elements you want to spy on. There is nothing more to do
with the content elements. It's awfully simple so far, right?

```jsx
// Content blocks
conat ContentWithBoxes = () => {
  return (
    <>
      <section id="target-1">Content here</section>
      <section id="target-2">Content here</section>
      <section id="target-3">Content here</section>
    </>
)};

// Heading tags
conat ContentWithHeaders = () => {
  return (
    <>
      <section>
        <h2 id="target-1">Target 1</h2>
      </section>
      <section>
        <h2 id="target-2">Target 2</h2>
      </section>
      <section>
        <h2 id="target-3">Target 3</h2>
      </section>
    </>
)};
```

### Step 2: Navigation

Wrap your navigation structure with `ScrollSpy` component. Use only `a` tags whose `href` attribute is the hash link of
the `id` of an existing content element. You can use structures of any complexity or depth in the `ScrollSpy` component,
and you can nest multiple `ScrollSpy` components (although this works, it is not recommended). Don't worry, `ScrollSpy`
won't add any additional structures to the child component.

_Note: If you are new to URL hashes, here is some information: https://en.wikipedia.org/wiki/URI_fragment_

```jsx
import ScrollSpy from 'react-scrollspy-navigation';
```

```jsx
const Navigation = () => {
  return (
    <ScrollSpy activeClass="nav-active">
      <nav>
        <ul>
          <li>
            <a href="#target-1">...</a>
          </li>
          <li>
            <a href="#target-2">...</a>
          </li>
          <li>
            <a href="#target-3">...</a>
          </li>
        </ul>
      </nav>
    </ScrollSpy>
  );
};
```

Don't forget to specify in the `activeClass` prop what className to add to the currently active link. Congratulations,
we are done, it was that simple. Continue reading the documentation to find out what options are available to configure
how `ScrollSpy` works.

_Note: The much loved `Refs` used in the previous version and React were thrown away._

## Configuration

### Available `ScrollSpy` props

| Prop        | Type                            | Default                 | Description                                                                                                                                                                                                                |
| ----------- | ------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activeClass | string                          | ''                      | Class name to be applied to the active link                                                                                                                                                                                |
| activeAttr  | boolean                         | false                   | If true, the active link will have an attribute `data-active` attached to it.                                                                                                                                              |
| offsetTop   | number                          | 0                       | Offset the final scroll position from top in pixels.                                                                                                                                                                       |
| offsetLeft  | number                          | 0                       | Offset the final scroll position from left in pixels.                                                                                                                                                                      |
| behavior    | 'smooth' \| 'instant' \| 'auto' | 'smooth'                | Behavior of the scroll animation. See: [Element: scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo#options)                                                                                    |
| root        | HTMLElement \| null             | null                    | Root element for the intersection observer. See: [IntersectionObserver: IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)                        |
| rootMargin  | string                          | '0px'                   | Root margin for the intersection observer See: [IntersectionObserver: IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options) observed.                |
| threshold   | number \| number[]              | [0, 0.25, 0.5, 0.75, 1] | Thresholds for the intersection. Element to be observed. See: [IntersectionObserver: IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options) observer. |
| onClickEach | function                        | undefined               | Callback function for handle the click event                                                                                                                                                                               |

### `onClickEach(event, internalClickHandler, container)`

- `event`: The original click event
- `internalClickHandler`: The internal function that scrolls to the element. This should be called at the end of the
  `onClickEach` function, as you want the internal click handler to run.
- `container`: Container element that is being scrolled. Always try to find the scrollable parent of the linked element.

Example:

```jsx
const Comp = () => {
  const onClickEach = (e, next, container) => {
    console.log('The clicked element:', e.target);
    console.log('The container element of target:', container);
    next();
  };

  return <ScrollSpy onClickEach={onClickEach}>...</ScrollSpy>;
};
```

## Compatibility

A component depends on the following functions or classes, which define its compatibility.

- Scroll methods on elements (scroll, scrollTo, scrollBy):
  [supported browsers](https://caniuse.com/element-scroll-methods)
- IntersectionObserver API: [supported browsers](https://caniuse.com/mdn-api_intersectionobserver)

## Example code

Check out the interactive demo and example codes.

**[Demo with example code](https://32jhvk.csb.app)**

**[Sponsor me on GitHub](https://github.com/sponsors/toviszsolt)**

**[Sponsor me on PayPal](https://paypal.me/toviszsolt)**

## Guidelines

To learn about the guidelines, please read the [Code of Conduct](./CODE_OF_CONDUCT.md),
[Contributing](./CONTRIBUTING.md) and [Security Policy](./SECURITY.md) documents.

## License

MIT License @ 2021 [Zsolt Tövis](https://github.com/toviszsolt)

If you found this project interesting, please consider supporting my open source work by
[sponsoring me on GitHub](https://github.com/sponsors/toviszsolt) /
[sponsoring me on PayPal](https://www.paypal.com/paypalme/toviszsolt) /
[give the repo a star](https://github.com/toviszsolt/react-scrollspy).
