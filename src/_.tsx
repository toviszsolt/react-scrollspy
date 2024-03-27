import React from 'react';
import ScrollSpy from 'react-scrollspy-navigation';

const _ = () => {
  return (
    <ScrollSpy
      activeClass="fg-red-500"
      activeAttr={true}
      offsetTop={80}
      offsetLeft={20}
      behavior="instant"
      root={document.getElementById('root')}
      rootMargin="-60px 0px 0px 0px"
      threshold={0}
      onClickEach={(e, next, container) => {
        console.log('The clicked element:', e.target);
        console.log('The container element of target:', container);
        next();
      }}
    >
      <div>bruh</div>
    </ScrollSpy>
  );
};

export default _;
