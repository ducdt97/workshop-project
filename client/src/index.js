import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About/About";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./components/Login/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products/:id" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<About/>} />
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
