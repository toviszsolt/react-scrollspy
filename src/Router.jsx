import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sample1 from './Sample1';
import Sample2 from './Sample2';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Sample1 />} />
      <Route path="/sample2" element={<Sample2 />} />
    </Routes>
  );
};

export default Router;
