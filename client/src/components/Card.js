import { Link } from "react-router-dom";

function Card({item}){
    const apiUrl = "http://localhost:1337"; 

    return (
            <div className="col mb-5">
              <div className="card h-100">
                {/* * <!-- Product image--> * */}
                <img
                  className="card-img-top"
                  src={apiUrl + item.attributes?.img?.data[0]?.attributes?.url}
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">{item.attributes.title}</h5>
                    {/* <!-- Product price--> */}${item.attributes.price}
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link
                      to={`/product/${item.id}`}
                      className="btn btn-outline-dark mt-auto"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Card;