import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartReducer";
import useFetch from "../hooks/useFetch";

function Product() {
  const id = useParams().id;
  const apiUrl = "http://localhost:1337";
  const [number, setNumber] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const dispatch = useDispatch();
  const {data, loading, error} = useFetch(`/products/${id}?populate=*`);

    return (
        <section className="container py-5">
            <div className="d-flex px-4 px-lg-5 my-5">
                <div className="col p-3 gap-3" style={{flex: "1"}}>
                  <img 
                    className="btn border w-75 object-fit-contain pe-auto mb-2"
                    style={{height: "150px"}}
                    alt="" 
                    src={apiUrl + data?.attributes?.img?.data[0]?.attributes?.url}
                    onClick={() => setSelectedImg(0)}
                  />
                  <img 
                    className="btn border w-75 object-fit-contain pe-auto mb-2"
                    style={{height: "150px"}} 
                    alt="" 
                    src={apiUrl + data?.attributes?.img?.data[1]?.attributes?.url}
                    onClick={() => setSelectedImg(1)}
                  />
                  <img 
                    className="btn border w-75 object-fit-contain pe-auto mb-2"
                    style={{height: "150px"}}
                    alt=""  
                    src={apiUrl + data?.attributes?.img?.data[2]?.attributes?.url}
                    onClick={() => setSelectedImg(2)}
                  />
                </div>
                <div className="row gx-4 gx-lg-5 align-items-center" style={{flex: "5"}}>
                    <div className="col-md-6">
                      <img 
                      className="card-img-top mb-5 mb-md-0" 
                      src={apiUrl + data?.attributes?.img?.data[selectedImg]?.attributes?.url} alt="..."
                      />
                      </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">{data?.attributes?.title}</h1>
                        <div className="fs-5 mb-2"> 
                            <span className="text-decoration-line-through m-2">$45.00</span>
                            <span>${data?.attributes?.price}</span>
                        </div>
                        <p className="lead">{data?.attributes?.description}</p>
                        <br/>
                        <p className="lead">{data?.attributes?.subDescription}</p>
                        <div className="d-flex mt-5" style={{gap: "10px", alignItems: "center"}}>
                        <button type="button" className="btn btn-outline-dark" onClick={() => setNumber((pre) => pre ===1 ? 1: pre -1)}>-</button>
                        {number}
                        <button type="button" className="btn btn-outline-dark" onClick={() => setNumber((pre) => pre +1)} >+</button>
                            <button className="btn btn-secondary flex-shrink-0" type="button" id="liveToastBtn" onClick={() => {dispatch(addToCart({
                              id: data.id,
                              title: data.attributes.title,
                              description: data.attributes.description,
                              subDescription: data.attributes.subDescription,
                              price: data.attributes.price,
                              img: apiUrl + data.attributes.img.data[selectedImg].attributes.url,
                              number
                            }))}}>
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