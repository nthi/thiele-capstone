import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { WSWD } from "./WSWD"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <WSWD />
    </BrowserRouter>
)








// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//in honeyraes, this page is using <Repairs /> component instead of ap (repairs is in ./components folder and is acting as the top level view/organization frame)