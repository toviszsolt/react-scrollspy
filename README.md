[![GitHub License](https://img.shields.io/github/license/toviszsolt/react-scrollspy?style=flat)](https://github.com/toviszsolt/react-scrollspy/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/react-scrollspy?style=flat&color=red)](https://www.npmjs.com/package/react-scrollspy-navigation)
[![GitHub Repo stars](https://img.shields.io/github/stars/toviszsolt/react-scrollspy?color=DAAA3F)](https://github.com/toviszsolt/react-scrollspy/stargazers)
[![Run tests](https://github.com/toviszsolt/react-scrollspy/actions/workflows/main.yml/badge.svg)](https://github.com/toviszsolt/react-scrollspy/actions/workflows/main.yml)
[![NPM Downloads](https://img.shields.io/npm/dw/react-scrollspy-navigation?style=flat)](https://www.npmjs.com/package/react-scrollspy-navigation)
[![Sponsor](https://img.shields.io/static/v1?label=sponsor&message=❤&color=ff69b4)](https://github.com/sponsors/toviszsolt)

## ![Poster](assets/poster.png)

# React Scrollspy Component

**react-scrollspy-navigation** is a React Component, that automatically update navigation components based on scroll
position to indicate which link is currently active in the viewport. It also scrolls (navigation) to viewport when click
on a navigation component.

**[Demo with example code](https://mvzn2.csb.app/)**

**[Sponsor me on Github](https://github.com/sponsors/toviszsolt)**

**[Sponsor me on PayPal](https://paypal.me/toviszsolt)**

## How to install

Install via NPM or Yarn package manager

```
npm i react-scrollspy-navigation
```

```
yarn add react-scrollspy-navigation
```

## About the Component

- **It works as a real react component with `Refs`**
- It works with **nested components** (standard `forwardRef` components)
- It works on window scrolling (**scrollable boxes not supported yet**)
- It works with **vertical and horizontal** scrolling also

## How to use it

- Add unique `id` to content blocks.

```jsx
<App>
  <Navigation />
  <Section id="box-1">Content here</Section>
  <Section id="box-2">Content here</Section>
  <Section id="box-3">Content here</Section>
</App>
```

- Add `ScrollSpy` component to your navigation. You need to add `ref={createRef()}` to each navigation item that you
  want to works with ScrollSpy.

```jsx
import ScrollSpy from 'react-scrollspy-navigation';
```

```jsx
// Last item won't use as ScrollSpy item, but you can place there
<ScrollSpy>
  <a href="#box-1" ref={React.createRef()}>
    ...
  </a>
  <a href="#box-2" ref={React.createRef()}>
    ...
  </a>
  <a href="#box-3" ref={React.createRef()}>
    ...
  </a>
  <a href="/home">...</a>
</ScrollSpy>
```

- You can use nested components, but wrapper component(s) need to use `forwardRefs`.

```jsx
// FancyButton component
const FancyButton = React.forwardRef(({ href, text }, ref) => (
  <a ref={ref} href={href} className="FancyButton">
    {text}
  </a>
));
```

```jsx
// ScrollSpy initialization
<ScrollSpy>
  <FancyButton link="#box-1" text="Box 1" ref={React.createRef()} />
  <FancyButton link="#box-2" text="Box 2" ref={React.createRef()} />
  <FancyButton link="#box-3" text="Box 3" ref={React.createRef()} />
</ScrollSpy>
```

## Configuration

Available `ScrollSpy` component properties

- `className` - class name of active item (default: `active`)
- `offsetTop` - if you are using `fixed` or `sticky` navigation bar, the **vertical scroll position** can be adjusting
  when you click on the navigation item. Value can be `integer` (`positive`, `negative` or `zero`). (default: `0`, unit:
  `px`)
- `offsetLeft` - if you are using `fixed` or `sticky` navigation bar, the **horizontal scroll position** can be
  adjusting when you click on the navigation item. Value can be `integer` (`positive`, `negative` or `zero`). (default:
  `0`, unit: `px`)
- `duration` - the scroll animation duration, when you click on a navigation item (default: `1000`, unit: `ms`)

## Guidelines

To learn about the guidelines, please read the [Code of Conduct](./CODE_OF_CONDUCT.md),
[Contributing](./CONTRIBUTING.md) and [Security Policy](./SECURITY.md) documents.

## License

MIT License @ 2021 [Zsolt Tövis](https://github.com/toviszsolt)

If you found this project interesting, please consider supporting my open source work by
[sponsoring me on GitHub](https://github.com/sponsors/toviszsolt) /
[sponsoring me on PayPal](https://www.paypal.com/paypalme/toviszsolt) /
[give the repo a star](https://github.com/toviszsolt/react-scrollspy).
