// import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
// import Heading from './components/Heading';
import Navbar from './components/Navigation/Navbar';
import Search from './components/Views/Search';

ReactDom.render(
  <div>
    <Navbar />
    <Search />
    </div>,
    document.getElementById("food-shop")
);
