import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routerroot from './Route/RouteRoot';
import { Provider } from 'react-redux';
import  Store  from './Store/Store';
import ExampleClass from './Components/ExampleClass';
import Counter from './Components/Counter';
import Parent from './Components/Parent';
import ParentContextAPISample from './ContextAPI/ParentContextAPISample'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    {/* <Provider store={Store}>
      <Routerroot/>
    </Provider> */}
    {/* <ExampleClass/> */}
    {/* <Counter/> */}
    {/* <Parent/> */}
    <ParentContextAPISample/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
