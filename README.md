# React Scrollspy Component

**react-scrollspy-navigation** is a React Component, that automatically update navigation components based on scroll position to indicate which link is currently active in the viewport. It also scrolls (navigation) to viewport when click on a navigation component.

**[Demo with example code](https://mvzn2.csb.app/)**

## How to install

Install via NPM package manager

```
npm i react-scrollspy-navigation
```

Install via Yarn package manager

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

- Add `ScrollSpy` component to your navigation. You need to add `ref={createRef()}` to each navigation item that you want to works with ScrollSpy.

```jsx
import ScrollSpy from 'react-scrollspy-navigation';
```

```jsx
// Last item won't use as ScrollSpy item, but you can place there
<ScrollSpy>
  <a href="#box-1" ref={createRef()}>
    ...
  </a>
  <a href="#box-2" ref={createRef()}>
    ...
  </a>
  <a href="#box-3" ref={createRef()}>
    ...
  </a>
  <a href="/home">...</a>
</ScrollSpy>
```

- You can use nested components, but wrapper component(s) need to use `forwardRefs`.

```jsx
// FancyButton component
const FancyButton = forwardRef(({ href, text }, ref) => (
  <a ref={ref} href={href} className="FancyButton">
    {text}
  </a>
));
```

```jsx
// ScrollSpy initialization
<ScrollSpy>
  <FancyButton link="#box-1" text="Box 1" ref={createRef()} />
  <FancyButton link="#box-2" text="Box 2" ref={createRef()} />
  <FancyButton link="#box-3" text="Box 3" ref={createRef()} />
</ScrollSpy>
```

## Configuration

Available `ScrollSpy` component properties

- `className` - class name of active item (default: `active`)
- `offsetTop` - if you are using `fixed` or `sticky` navigation bar, the **vertical scroll position** can be adjusting when you click on the navigation item. Value can be `integer` (`positive`, `negative` or `zero`). (default: `0`, unit: `px`)
- `offsetLeft` - if you are using `fixed` or `sticky` navigation bar, the **horizontal scroll position** can be adjusting when you click on the navigation item. Value can be `integer` (`positive`, `negative` or `zero`). (default: `0`, unit: `px`)
- `duration` - the scroll animation duration, when you click on a navigation item (default: `1000`, unit: `ms`)

## Sponsorship

I will happy if you can donate/sponsor me via PayPal.Me. **[Donate Me](https://paypal.me/toviszsolt)**

## License

MIT License. Copyright (c) 2021 Zsolt Tovis
