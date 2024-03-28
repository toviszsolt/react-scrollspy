import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

const Topbar = () => {
  return (
    <div className="px-20 bg-grey-900 fg-grey-300">
      <div
        className="container-auto-md h-35 flex align-center justify-center fs-13 fw-600 sx-20 overflow-x-auto"
        style={{ whiteSpace: 'nowrap' }}
      >
        <h1 className="text-4xl">v2.0 Released</h1>
        <div className="flex-1 flex justify-center align-center sx-20">
          <Link to="/" className="hover:fg-red-300">
            Example 1
          </Link>
          <Link to="/sample2" className="hover:fg-red-300">
            Example 2
          </Link>
        </div>
        <Link to="https://github.com/toviszsolt/react-scrollspy" target="_blank" className="hover:fg-red-300">
          Github
        </Link>
        <Link
          to="https://www.npmjs.com/package/react-scrollspy-navigation"
          target="_blank"
          className="hover:fg-red-300"
        >
          Npm
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="px-20 min-h-250 px-20 bg-grey-900 fg-grey-300">
      <div className="container-auto-md p-20 text-center">
        <h3>Footer</h3>
      </div>
    </footer>
  );
};

export default App;
