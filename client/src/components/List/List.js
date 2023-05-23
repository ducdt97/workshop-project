import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./List.css";
import ReactPaginate from "react-paginate";

function List({ catId, subCats, sort }) {
  const [query, setQuery] = useState("");
  let subUrl = "";
  subCats.map((i) => (subUrl += `&[filters][sub_categories][id][$eq]=${i}`));
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subUrl}&sort=price:${sort}`
  );
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = searchResults.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchResults.length / itemsPerPage);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      item.attributes.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredItems);
    setItemOffset(0);
  }, [data, query]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchResults.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="d-flex">
        <i className="bi bi-award-fill h2 text-info" style={{ flex: "1" }}></i>
        <i
          className="bi bi-award-fill h2 text-danger"
          style={{ flex: "1" }}
        ></i>
        <i
          className="bi bi-award-fill h2 text-success"
          style={{ flex: "1" }}
        ></i>
        <div className="d-flex mb-4 justify-content-center" role="search">
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="bi bi-search text-success btn"></i>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {currentItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeLinkClassName="active"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
      />
    </>
  );
}

export default List;
