import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";


function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products)

  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          <h4>Fashion shop</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
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
              <i class="bi bi-house-fill"> </i> 
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i class="bi bi-info-circle-fill"> </i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products/1" className="nav-link">
              <i class="bi bi-gender-male"> </i>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products/2" className="nav-link">
                <i class="bi bi-gender-female"> </i>
                Women
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-dark"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <i className="bi-cart-fill me-1"></i>Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{products.length}</span>
          </button>
        </div>
        {open ? <Cart onClose={() => setOpen(false)}/> : ""}
      </div>
    </nav>
  );
}

export default Navbar;
