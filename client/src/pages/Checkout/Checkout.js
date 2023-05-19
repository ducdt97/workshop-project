import { useState } from "react";
import { selectCartProducts } from "../../components/Cart/Cart";
import "./Checkout.css";
import { useSelector } from "react-redux";
import validator from "validator"

function Checkout() {
  const cartProducts = useSelector(selectCartProducts);
  const total = useSelector(state => state.cart.total);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (e) => {
    setEmail(e.target.value);

    if (validator.isEmail(email)) {
      setMailMessage("")
      setIsValid(validator.isEmail(e.target.value) && validator.isMobilePhone(phone, "any"));
    } else {
      setMailMessage("Please, enter valid Email!");
    }
  };
  
  const validatePhone = (e) => {
    setPhone(e.target.value);

    if (validator.isMobilePhone(phone)) {
        setPhoneMessage("")
        setIsValid(validator.isEmail(email) && validator.isMobilePhone(e.target.value, "any"));
    } else {
        setPhoneMessage("Please, enter valid Phone number!")
    }
  };

  const handleSubmit = (e) => {
    alert("Payment success !")
  };

  return (
    <div className="container-1 mt-4 p-0">
      <div className="row px-md-4 px-2 pt-4">
        <div className="col-lg-8">
          <p className="pb-2 fw-bold">Order</p>
          <div className="card">
            <div className="ribbon ribbon-top-right">
              <span>SALE TIME!</span>
            </div>
            <div>
              <div className="table-responsive px-md-4 px-2 pt-3">
                <table className="table table-borderless">
                  <tbody>
                    {cartProducts?.map((item) => (
                      <tr className="border-bottom" key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              {" "}
                              <img className="pic" src={item.img} alt="" />{" "}
                            </div>
                            <div className="ps-3 d-flex flex-column justify-content">
                              <p className="fw-bold text-danger">
                                {item.title}
                              </p>{" "}
                              <small className=" d-flex">
                                {" "}
                                <span className=" fw-bold">Desc:</span>{" "}
                                <span
                                  className=" text-muted text-truncate"
                                  style={{ maxWidth: "400px" }}
                                >
                                  {item.description}
                                </span>{" "}
                              </small>{" "}
                              <small className="">
                                {" "}
                                <span className="fw-bold">Size:</span>{" "}
                                <span className=" text-muted">L</span>{" "}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <p className="pe-3">
                              <span className="red">${item.price}</span>
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {" "}
                            <span className="pe-3 text-muted">
                              x {item.number}
                            </span>
                            <div className="round">
                              {" "}
<<<<<<< HEAD
                              <span className=""> L </span>{" "}
=======
                              <small className="text-danger fst-italic">New</small>{" "}
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 payment-summary">
          <p className="fw-bold pt-lg-0 pt-4 pb-2">Payment Summary</p>
          <div className="card px-md-3 px-2 pt-4">
            <div className="unregistered mb-4">
              {" "}
              <span className="py-1">Payment details</span>{" "}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <p className="dis fw-bold mb-2">Email address</p>
                <input
                  className="form-control"
                  type="email"
                  id="userEmail"
                  onChange={(e) => validateEmail(e)}
                  placeholder="name@email.com"
                />
                <br />
                <span className="text-danger">
                {mailMessage}
                </span>
              </div>
              <div>
                <p className="dis fw-bold mb-2">Card details</p>
                <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                  <div className="fab fa-cc-visa ps-3"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Details"
                  />
                  <div className="d-flex w-50">
                    <input
                      type="text"
                      className="form-control px-0"
                      placeholder="MM/YY"
                    />
                    <input
                      type="password"
                      maxlength={3}
                      className="form-control px-0"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div className="my-3 cardname">
                  <p className="dis fw-bold mb-2">Phone number</p>
                  <input 
                  className="form-control" 
                  type="number" 
                  placeholder="type your phone number..."
                  onChange={(e) => validatePhone(e)}
                  />
                  <span className="text-danger">
                    {phoneMessage}
                    </span>
                </div>
                <div className="address">
                  <p className="dis fw-bold mb-3">Address</p>
                  <div className="d-flex">
                    <input
                      className="form-control state"
                      type="text"
                      placeholder="type your address..."
                    />
                  </div>
                  <div className=" my-3">
                    <p className="dis fw-bold mb-2">VAT Number</p>
                    <div className="inputWithcheck">
                      <input
                        className="form-control"
                        type="text"
                        value="GB012345B9"
                      />
                      <span className="fas fa-check"></span>
                    </div>
                  </div>
                  <div className="d-flex flex-column dis">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p>Subtotal</p>
                      <p>
                        <span className="fas fa-dollar-sign"></span>${total}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p>
                        VAT<span>(1%)</span>
                      </p>
                      <p>
                        <span className="fas fa-dollar-sign"></span>${(total * 0.1).toFixed(1)}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="fw-bold">Total</p>
                      <p className="fw-bold">
                        <span className="fas fa-dollar-sign"></span>
                        ${total + (total * 0.1)}
                      </p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" disabled={!isValid}>Pay</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="sale my-3">
              {" "}
              <span>
                sale<span className="px-1">expiring</span>
                <span>in</span>:
              </span>
              <span className="red">
                21<span className="ps-1">hours</span>,31
                <span className="ps-1 ">minutes</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
