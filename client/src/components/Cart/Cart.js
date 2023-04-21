import "./Cart.css"
function Cart() {
  return (
    <div className="cart">
        <h1 className="text">Products in your cart</h1>
        <div className="item">
            <img className="img1" src="" alt="" />
            <div className="details">
                <h1 className="text1">item title</h1>
                <p className="text2">item description</p>
                <div className="price">item price</div>
            </div>
        </div>
        <div className="total">
            <span>Total</span>
            <span>$111</span>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <button className="btn btn-secondary">Checkout</button>
        <span className="reset">Reset Card</span>
        </div>
    </div>
  );
}

export default Cart;
