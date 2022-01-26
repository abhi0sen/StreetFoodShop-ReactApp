// import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import FrontPage from './components/front-page';
// import Heading from './components/Heading';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Veg from './components/Pages/Veg/ProductList';
// import NonVeg from './components/Pages/NonVeg/ProductList';
// import DishType from './components/Pages';
import NonVeg from './components/Pages/NonVeg/ProductList';
// import { Route } from 'react-router-dom';

// import 'react-bootstrap';

ReactDom.render(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/nonveg" element={<NonVeg />} />
      <Route path="/veg" element={<Veg />} />
      {/* <Route path="/cart" element={<FrontPage />} /> */}
    </Routes>
  </BrowserRouter>
    {/* <FrontPage /> */}
  </div>,
  document.getElementById("food-shop")
);
