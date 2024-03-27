import React from 'react';
import ScrollSpy from '../lib/ScrollSpy';
import { cn } from '../lib/utils.js';

const nav = [
  { href: '#section-a1', title: 'Link A1' },
  { href: '#section-a2', title: 'Link A2' },
  { href: '#section-a3', title: 'Link A3' },
  { href: '#section-a4', title: 'Link A4' },
  { href: '#section-a5', title: 'Link A5' },
  { href: '#section-a6', title: 'Link A6' },
];

const content = [
  { id: 'section-a1', title: 'Section A1', className: 'bg-red-100' },
  { id: 'section-a2', title: 'Section A2', className: 'bg-blue-100' },
  { id: 'section-a3', title: 'Section A3', className: 'bg-green-100' },
  { id: 'section-a4', title: 'Section A4', className: 'bg-yellow-100' },
  { id: 'section-a5', title: 'Section A5', className: 'bg-pink-100' },
  { id: 'section-a6', title: 'Section A6', className: 'bg-teal-100' },
  { id: 'section-b1', title: 'Section B1', className: 'bg-orange-100' },
  { id: 'section-b2', title: 'Section B2', className: 'bg-cyan-100' },
];

const Sample1 = () => {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};

const Navbar = () => {
  return (
    <div className="flex align-center sticky top-0 z-1000 h-60 px-20 bg-white shadow-2">
      <div className="container-auto-md flex align-center sx-20">
        <h1 className="fs-18 fw-500">ScrollSpy Example</h1>
        <ScrollSpy activeClass="fg-red-500" offsetTop={80} rootMargin="-60px 0px 0px 0px">
          <nav className="flex-1 flex justify-center">
            <ul className="flex align-center sx-20">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex fs-14 fw-500 hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ScrollSpy activeClass="fg-blue-500" offsetTop={80}>
            <a href="#section-b1" className="fs-14 fw-500 hover:underline">
              Link B1
            </a>
            <a href="#section-b2" className="fs-14 fw-500 hover:underline">
              Link B2
            </a>
          </ScrollSpy>
        </ScrollSpy>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <>
      {content.map(({ id, title, className }) => (
        <Section key={id} className={cn('p-20', className)}>
          <h2 id={id} className="fs-36">
            {title}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus, voluptatum aspernatur nesciunt
            tempora quas necessitatibus. Ratione, voluptates.
          </p>
        </Section>
      ))}
    </>
  );
};

const Section = ({ id, className, children }) => {
  const prefix = Math.random().toString(36).slice(7) + '-';
  return (
    <section id={id} className={className}>
      <div className="container-auto-md min-h-300 py-20">
        {children}
        <VerticalScrollContent idPrefix={prefix} />
      </div>
    </section>
  );
};

const VerticalScrollContent = ({ idPrefix = '' }) => {
  return (
    <ScrollSpy activeClass="fg-teal-500" offsetLeft={20}>
      <div className="mt-20 bg-grey-100 b-1 b-grey-300">
        <div className="flex align-center h-45 px-20 sx-20 bb-1 b-grey-300">
          {Array.from({ length: 5 }, (_, i) => (
            <a key={i} href={`#${idPrefix}sub${i + 1}`} className="fs-14 fw-500 hover:underline">
              Sub-Link {i + 1}
            </a>
          ))}
        </div>

        <div className="flex flex-row p-20 fs-16 sx-20 overflow-x-auto">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} id={idPrefix + 'sub' + (i + 1)} className="flex-0 w-2/3 bg-white r-20 p-20 sy-10">
              <h2 className="fw-700">Sub-Section {i + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus, voluptatum aspernatur
                nesciunt tempora quas necessitatibus. Ratione, voluptates.
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollSpy>
  );
};

export default Sample1;
