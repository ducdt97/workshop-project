import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
