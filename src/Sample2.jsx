import React, { useState } from 'react';
import ScrollSpy from '../lib/ScrollSpy';
import { cn } from '../lib/utils.js';

const content = [
  { id: 'section-a1', title: 'Box 1', className: 'bg-red-250' },
  { id: 'section-a2', title: 'Box 2', className: 'bg-blue-250' },
  { id: 'section-a3', title: 'Box 3', className: 'bg-green-250' },
  { id: 'section-a4', title: 'Box 4', className: 'bg-yellow-250' },
  { id: 'section-a5', title: 'Box 5', className: 'bg-pink-250' },
  { id: 'section-a6', title: 'Box 6', className: 'bg-teal-250' },
];

const Sample2 = () => {
  const [isColumn, setIsColumn] = useState(true);

  return (
    <>
      <Navbar isColumn={isColumn} setIsColumn={setIsColumn} />
      <Content isColumn={isColumn} />
    </>
  );
};

const Navbar = ({ isColumn, setIsColumn }) => {
  return (
    <div className="flex align-center sticky top-0 z-1000 px-20 bg-white/90 shadow-2">
      <div className="container-auto-md flex align-center sx-20 h-60 overflow-x-auto" style={{ whiteSpace: 'nowrap' }}>
        <h1 className="fs-18 fw-500">ScrollSpy Example</h1>
        <ScrollSpy activeClass="fg-red-500" rootMargin="-60px 0px 0px 0px">
          <nav className="flex-1 flex justify-center">
            <ul className="flex align-center sx-20">
              {content.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex fs-14 fw-500 hover:underline">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollSpy>
        <button className="fs-14 fw-500 hover:fg-red-500" onClick={() => setIsColumn(!isColumn)}>
          Toggel to {isColumn ? 'Vertical' : 'Horizontal'}
        </button>
      </div>
    </div>
  );
};

const Content = ({ isColumn }) => {
  return (
    <div className={cn('flex', isColumn ? 'flex-col' : 'flex-row overflow-x-auto')}>
      {content.map(({ id, title, className }) => (
        <div
          key={id}
          id={id}
          className={cn(
            'flex-0 flex w-full justify-center align-center fs-36 fw-700',
            isColumn ? 'h-screen' : 'h-700',
            className,
          )}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Sample2;
