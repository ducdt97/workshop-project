import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
    
    const apiUrl = "http://localhost:1337";
  const [products, setProducts] = useState([]);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(
              apiUrl + `/api/products?populate=*`
            );
            setProducts(res.data.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
      console.log(products)

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={apiUrl + products?.attributes?.img?.data[0]?.attributes?.url} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{products?.attributes?.title}</h1>
                        <div className="fs-5 mb-5"> 
                            <span className="text-decoration-line-through m-2">$45.00</span>
                            <span>${products?.attributes?.price}</span>
                        </div>
                        <p className="lead">{products?.attributes?.description}</p>
                        <div className="d-flex" style={{gap: "10px", alignItems: "center"}}>
                        <button type="button" className="btn btn-outline-dark" onClick={() => setNumber((pre) => pre ===1 ? 1: pre -1)}>-</button>
                        {number}
                        <button type="button" className="btn btn-outline-dark" onClick={() => setNumber((pre) => pre +1)} >+</button>
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