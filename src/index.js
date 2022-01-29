// import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import FrontPage from './components/front-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Veg from './components/Pages/Veg/ProductList';
import NonVeg from './components/Pages/NonVeg/ProductList';
import NonVegItemList from './components/Pages/NonVeg/ProductListing';
import VegItemList from './components/Pages/Veg/ProductListing';

ReactDom.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/nonvegitemlist" element={<NonVegItemList />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/vegitemlist" element={<VegItemList />} />
      </Routes>
    </BrowserRouter>
    {/* <FrontPage /> */}
  </div>,
  document.getElementById("food-shop")
);
