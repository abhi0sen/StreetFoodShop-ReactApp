import React from 'react';
import ReactDom from 'react-dom';
import Heading from './components/Heading';
import Count from './components/Count';
import CountComponent from './components/countcClass';
import Loop from './components/loop';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDom.render(
  <div>
    <Heading title = "Hello Props" />
    <Count initialValue = {5} />
    <hr />
  <CountComponent  initialValue = {10} />
  <Loop />
  </div>,
  document.getElementById('root')

);

