import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import ProductList from './components/pages/ProductList'
import ProductDetails from './components/pages/ProductDetails'
import CartPage from './components/pages/Cart'



ReactDom.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Heading title = "e-Commerce Home Page" />} />
    <Route path="/ProductList" element = {<ProductList />} />
    <Route path="/ProductDetails" element = {<ProductDetails />} />
    <Route path="/cart" element = {<CartPage />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
