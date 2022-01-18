import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import ProductList from './components/pages/ProductList'
import ProductDetails from './components/pages/ProductDetails'
import Cart from './components/pages/Cart'



ReactDOM.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Heading title = "Hello" />} />
    <Route path="/products-List" element = {<ProductList />} />
    <Route path="/products-details" element = {<ProductDetails />} />
    <Route path="/cart" element = {<Cart />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('react-learn')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
