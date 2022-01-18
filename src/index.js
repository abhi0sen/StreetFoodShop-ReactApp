import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading';
import Count from './components/Count';
import CountComponent from './components/countcClass';
import Loop from './components/loop';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
    <Heading title = "Hello Props" />
    <Count initialValue = {5} />
    <hr />
  <CountComponent  initialValue = {10} />
  <Loop />
  </div>,
  document.getElementById('react-learn')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
