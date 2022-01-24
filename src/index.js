// import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
// import Heading from './components/Heading';
import './index.css' ;
import Navbar from './components/Navigation/Navbar';
import Search from './components/Views/Search';
import Option from './components/front-page/homePageButton'
import Copyright from './components/copyright';
import Banner from './components/Views/wait';


ReactDom.render(
  <div>
    <Navbar />
    <Search />
    <Banner />
    <Option />
    <Copyright />
  </div>,
  document.getElementById("food-shop")
);
