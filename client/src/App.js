import React from "react";
import CustomNavbar from "./components/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
