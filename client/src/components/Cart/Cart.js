import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart, calculateTotal } from "../../redux/cartReducer";
import "./Cart.css"
import { Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
export const selectCartProducts = createSelector(
  state => state.cart.products,
  products => products,
);

function Cart() {
  const products = useSelector(state => state.cart.products)
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

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
            <i className="bi bi-trash3-fill delete" onClick={() => dispatch(removeItem(item.id))}></i>
        </div>
        ))}
        <div className="total">
            <span>Total</span>
            <span>${total}</span>
        </div>
        <div className="d-flex flex-column gap-2">
        <Link to="/checkout" className="btn btn-primary mt-auto">Checkout</Link>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Card</span>
        </div>
        </> 
        ) : <span className="notice">No products in your cart</span>
      }
      </div> 
        )
        };
export default Cart;
