import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.css";

function Products() {
  const catId = parseInt(useParams().id);
  const [selected, setSelected] = useState([]);
  const [sort, setSort] = useState("asc");
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}&/products?populate=*`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelected(
      isChecked
        ? [...selected, value]
        : selected.filter((item) => item !== value)
    );
  };

  return (
    <section className="py-5">
      <div className="d-flex px-4 px-lg-5 mt-5">
        <div className="h-100 t-50 px-3" style={{ flex: "1" }}>
          <div className="filter mb-5">
            <h3 className="bi bi-backspace-reverse-fill text-secondary fs-3">
              {" "}
              Product Categories
            </h3>
            {data.map((item) => (
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.id}
                  id={item.id}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={item.id}>
                  {item.attributes.title}
                </label>
              </div>
            ))}
          </div>
          <div className="filter mb-5">
            <h3 className="bi bi-backspace-reverse-fill text-secondary fs-3">
              {" "}
              Sort by
            </h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="price"
                id="asc"
                value="asc"
                checked={sort === "asc"}
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
                checked={sort === "desc"}
                onChange={() => setSort("desc")}
              />
              <label className="form-check-label" htmlFor="desc">
                Price (Highest first)
              </label>
            </div>
          </div>
        </div>
        <div className="list" style={{ flex: "3" }}>
          <div className="hbody mb-3">
            <p className="text-center">Free shipping, 30-day return or refund guarantee</p>
            <p className="text-center">Visit us: 12 Science Avenue, Ghenh Rang, Quy Nhon, Binh Dinh</p>
            <div className="loop-wrapper">
              <div className="mountain"></div>
              <div className="hill"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="rock"></div>
              <div className="truck"></div>
              <div className="wheels"></div>
            </div>
          </div>
          <List catId={catId} subCats={selected} sort={sort} />
        </div>
      </div>
    </section>
  );
}

export default Products;
