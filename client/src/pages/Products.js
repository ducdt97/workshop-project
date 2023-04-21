import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const apiUrl = "http://localhost:1337";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          apiUrl + "/api/products?populate=*"
        );
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((item) => (
            <div key={item.id} className="col mb-5">
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
                      to="/product"
                      className="btn btn-outline-dark mt-auto"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
