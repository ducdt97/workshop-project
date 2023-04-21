import { useState } from "react";

function Product() {
    const [number, setNumber] = useState(1)
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">Shop item template</h1>
                        <div className="fs-5 mb-5"> 
                            <span className="text-decoration-line-through m-2">$45.00</span>
                            <span>$40.00</span>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div className="d-flex" style={{gap: "10px", alignItems: "center"}}>
                        <button type="button" class="btn btn-outline-dark" onClick={() => setNumber((pre) => pre ===1 ? 1: pre -1)}>-</button>
                        {number}
                        <button type="button" class="btn btn-outline-dark" onClick={() => setNumber((pre) => pre +1)} >+</button>
                            <button className="btn btn-secondary flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;