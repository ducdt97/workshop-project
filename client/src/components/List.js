import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Card from "./Card/Card";

function List({ catId, subCats, sort }) {
  console.log(subCats, 'subCats');
  const [pageIndex, setPageIndex] = useState(1);
  const [query, setQuery] = useState("");
  let subUrl = '';
  subCats.map((i) => subUrl += `&[filters][sub_categories][id][$eq]=${i}` );
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subUrl}&sort=price:${sort}&pagination[page]=${pageIndex}&pagination[pageSize]=8`
  );

  return (
    <>
      <div className="d-flex">
        <i className="bi bi-award-fill h2 text-info" style={{ flex: "1" }}></i>
        <i className="bi bi-award-fill h2 text-danger" style={{ flex: "1" }}></i>
        <i className="bi bi-award-fill h2 text-success" style={{ flex: "1" }}></i>
        <div className="d-flex mb-4 justify-content-center" role="search">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="bi bi-search text-success btn"></i>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {data
          ?.filter((item) =>
            item.attributes.title.toLowerCase().includes(query)
          )
          .map((item) => (
            <Card item={item} key={item.id} />
          ))}
      </div>
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className={`page-link ${pageIndex === 1 ? "disabled" : ""}`}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${pageIndex === 1 ? "active" : ""}`}
              onClick={() => setPageIndex(1)}
            >
              1
            </button>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${pageIndex === 2 ? "active" : ""}`}
              onClick={() => setPageIndex(2)}
            >
              2
            </button>
          </li>
          <li className="page-item">
            <button
              className={`page-link ${pageIndex === 2 ? "disabled" : ""}`}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default List;
