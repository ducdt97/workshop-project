import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import useFetch from "../hooks/useFetch";

function Products() {
  const catId = parseInt(useParams().id);
  const [selected, setSelected] = useState([]);
  const [sort, setSort] = useState("asc");
  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

const handleChange = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;
  setSelected(isChecked ? [...selected, value] : selected.filter((item) => item !== value));
}
console.log(sort)
  return (
    <section className="py-5">
      <div className="d-flex px-4 px-lg-5 mt-5">
        <div className="h-100 t-50 px-3 " style={{ flex: "1" }}>
          <div className="filter mb-auto">
            <h3 style={{fontWeight: "400", marginBottom:"20px"}}>Product Categories</h3>
            {data?.map((item) => (
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
                name="price"
                id="asc"
                value="asc"
                onChange={() => setSort("asc")}
              />
              <label className="form-check-label" htmlFor="asc">
                Price (Lowest first)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="price"
                id="desc"
                value="desc"
                onChange={() => setSort("desc")}
              />
              <label className="form-check-label" htmlFor="desc">
                Price (Highest first)
              </label>
            </div>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        style={{ flex: "3" }}>
        <List catId={catId} subCats={selected} sort={sort} />
        </div>
        </div>
    </section>
  );
}

export default Products;
