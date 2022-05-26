import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2'
import Counter2 from './Counter2';
import Immer from './Immer';
import reportWebVitals from './reportWebVitals';
import Hello2 from './Hello2';
import Counter3 from './Counter3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {/* <App /> */}
    {/* <App2/> */}
    {/* <Counter2 /> */}
    {/* <Immer/> */}
    <Hello2/>
    <Counter3/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
