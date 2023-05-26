import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import axios from 'axios';

function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/accounts/${userId}`);
        const user = response.data.data;
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      setIsLoggedIn(true);
      getUser();
    }
  }, [userId]);

  const toggle = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="sticky-top navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          <h4>Fashion shop</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="bi bi-house-fill"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="bi bi-info-circle-fill"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products/1" className="nav-link">
                <i className="bi bi-gender-male"></i>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products/2" className="nav-link">
                <i className="bi bi-gender-female"></i>
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rating" className="nav-link">
                Rating
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-dark"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {products.length}
            </span>
          </button>
          {isLoggedIn ? (
            <>
              <span className="nav-link m-2">Hi: {user?.attributes?.name}</span>
              <button className="btn btn-link nav-link m-2" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-link m-2">Login</Link>
          )}
        </div>
        {open && <Cart onClose={() => setOpen(false)} isLoggedIn={isLoggedIn} />}
      </div>
    </nav>
  );
}

export default Navbar;
