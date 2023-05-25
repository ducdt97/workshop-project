import React from "react";
import CustomNavbar from "./components/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <CustomNavbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
