import Categories from "../components/Categories/Categories";
import img from "../images/1.jpg";
import img1 from "../images/2.jpg";
import img2 from "../images/3.jpg";
function Home() {
  return (
    <div className="home">
      <div
        id="carouselExample"
        className="carousel slide container px-4 px-lg-5 mt-5 gap-3"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container px-4 px-lg-5 mt-5" >
        <Categories />
      </div>
    </div>
  );
}

export default Home;
