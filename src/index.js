import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './sass/main.css'
import Login from './component/Login/Login'
import Home from './component/Home/Home'
import { Provider } from "react-redux";
import {store} from './store/index'
import CreateProduct from './component/Home/CreateProduct';
import EditProduct from './component/Home/EditProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createproduct" element={<CreateProduct/>} />
          <Route path="/editproduct/:productid" element={<EditProduct/>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
