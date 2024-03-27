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
    >
      <div>bruh</div>
    </ScrollSpy>
  );
};

export default _;
