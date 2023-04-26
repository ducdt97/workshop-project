import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartReducer";

function Product() {
  const id = useParams().id;
  const apiUrl = "http://localhost:1337";
  const [product, setProduct] = useState([]);
  const [number, setNumber] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0)
  const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(
              apiUrl + `/api/products/${id}?populate=*`
            );
            setProduct(res.data.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

    return (
        <section className="py-5">
            <div className="d-flex px-4 px-lg-5 my-5">
                <div className="col p-3 gap-3" style={{flex: "1"}}>
                  <img 
                    className="btn border w-75 h-150 object-fit-cover pe-auto mb-2" 
                    src={apiUrl + product?.attributes?.img?.data[0]?.attributes?.url}
                    onClick={e => setSelectedImg(0)}
                  />
                  <img 
                    className="btn border w-75 h-150 object-fit-cover pe-auto mb-2" 
                    src={apiUrl + product?.attributes?.img?.data[1]?.attributes?.url}
                    onClick={e => setSelectedImg(1)}
                  />
                  <img 
                    className="btn border w-75 h-150 object-fit-cover pe-auto mb-2" 
                    src={apiUrl + product?.attributes?.img?.data[2]?.attributes?.url}
                    onClick={e => setSelectedImg(2)}
                  />
                </div>
                <div className="row gx-4 gx-lg-5 align-items-center" style={{flex: "5"}}>
                    <div className="col-md-6">
                      <img 
                      className="card-img-top mb-5 mb-md-0" 
                      src={apiUrl + product?.attributes?.img?.data[selectedImg]?.attributes?.url} alt="..."
                      />
                      </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{product?.attributes?.title}</h1>
                        <div className="fs-5 mb-5"> 
                            <span className="text-decoration-line-through m-2">$45.00</span>
                            <span>${product?.attributes?.price}</span>
                        </div>
                        <p className="lead">{product?.attributes?.description}</p>
                        <div className="d-flex" style={{gap: "10px", alignItems: "center"}}>
                        <button type="button" className="btn btn-outline-dark" onClick={() => setNumber((pre) => pre ===1 ? 1: pre -1)}>-</button>
                        {number}
                        <button type="button" className="btn btn-outline-dark" onClick={() => setNumber((pre) => pre +1)} >+</button>
                            <button className="btn btn-secondary flex-shrink-0" type="button" onClick={() => dispatch(addToCart({
                              id: product.id,
                              title: product.attributes.title,
                              description: product.attributes.description,
                              price: product.attributes.price,
                              img: apiUrl + product.attributes.img.data[selectedImg].attributes.url,
                              number
                            }))}>
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