import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "../components/List";

function Products() {
  const catId = parseInt(useParams().id);
  const apiUrl = "http://localhost:1337";
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl + `/api/sub-categories?[filters][categories][id][$eq]=${catId}`);
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

const handleChange = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;
  setSelected(isChecked ? [...selected, value] : selected.filter((item) => item !== value))
}

  return (
    <section className="py-5">
      <div className="d-flex px-4 px-lg-5 mt-5">
        <div className="sticky-top h-100 t-50 px-3 " style={{ flex: "1" }}>
          <div className="filter mb-auto">
            <h3 style={{fontWeight: "400", marginBottom:"20px"}}>Product Categories</h3>
            {products.map(item => (
            <div className="form-check" key={item.id}>
              <input
                className="form-check-input"
                type="checkbox"
                value={item.id}
                id={item.id}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={item.id}>{item.attributes.title}</label>
            </div>
            ))}
          </div>
          <div className="filter mb-auto">
            <h3 style={{fontWeight: "400", marginBottom:"20px"}}>Sort by</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Price (Lowest first)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Price (Highest first)
              </label>
            </div>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        style={{ flex: "3" }}>
        <List catId={catId} subCats={selected}/>
        </div>
        </div>
    </section>
  );
}

export default Products;
