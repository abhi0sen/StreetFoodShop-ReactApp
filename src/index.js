// import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import FrontPage from './components/front-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Veg from './components/Pages/Veg/ProductList';
import ProductDetails from './components/Pages/Veg/ProductDetails';
import NonVeg from './components/Pages/NonVeg/ProductList';
// import Product from './components/Pages/Veg/Product';


ReactDom.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/veg" element={<Veg />} >
          <Route path=":shopId" element={<ProductDetails />} />
        </Route>
        {/* <Route path="/cart" element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
    {/* <FrontPage /> */}
  </div>,
  document.getElementById("food-shop")
);
