import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./Cart.css"

function Cart() {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {
      total += item.number * item.price;
    });
    return total.toFixed(2);
  }

  return (
    <div className="cart">
        <h1 className="text">Products in your cart</h1>
        {products.map((item) => (
        <div className="item" key={item.id}>
            <img style={{width:"80px", height:"100px", objectFit:"cover"}} src={item.img} alt="" />
            <div className="details">
                <h1 className="text1">{item.title}</h1>
                <p className="text2">{item.description}n</p>
                <div className="price">{item.number} x ${item.price}</div>
            </div>
            <i className="bi bi-trash3-fill delete" onClick={() => dispatch(removeItem(item.id))}></i>
        </div>
        ))}
        <div className="total">
            <span>Total</span>
            <span>${totalPrice()}</span>
        </div>
        <div className="d-flex flex-column gap-2">
        <button className="btn btn-secondary">Checkout</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Card</span>
        </div>
    </div>
  );
}

export default Cart;
