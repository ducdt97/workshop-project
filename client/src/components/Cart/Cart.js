import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart, calculateTotal } from "../../redux/cartReducer";
import "./Cart.css";
import { Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const selectCartProducts = createSelector(
  state => state.cart.products,
  products => products.map(item => ({ ...item, img: item.img })),
);

function Cart({onClose, isLoggedIn}) {
  const products = useSelector(state => state.cart.products)
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItemId(null);
  };

  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setShowModal(true);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(selectedItemId));
    handleCloseModal();
  };

  return (
    <div className="cart">
      {products.length > 0 ? (
        <>
          <h1 className="text">Products in your cart</h1>
          {products?.map((item) => (
            <div className="item" key={item.id} onLoad={() => dispatch(calculateTotal())}>
              <img style={{width:"80px", height:"100px", objectFit:"cover"}} src={item.img} alt="" />
              <div className="details">
                <h1 className="text1">{item.title}</h1>
                <p className="text2">{item.description}</p>
                <div className="price">{item.number} x ${item.price}</div>
              </div>
              <i
                className="bi bi-trash3-fill delete"
                onClick={() => handleOpenModal({ id: item.id, img: item.img })}
              ></i>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <div className="d-flex flex-column gap-2">
            {isLoggedIn ? <Link to="/checkout" className="btn btn-primary mt-auto" onClick={onClose}>Checkout</Link> : <span className="text-center">You are not logged in<Link to="/login" className=""> Login</Link></span>}
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
          </div>
        </>
      ) : (
        <span className="notice">No products in your cart</span>
      )}

      <Modal size="sm" show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title >Confirmation form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Are you sure to delete this product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleRemoveItem}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
