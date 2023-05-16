import Categories from "../components/Categories/Categories";
import img from "../images/6.webp";
import img1 from "../images/7.webp";
import img2 from "../images/8.webp";

function Home() {
  const carouselItems = [
    {
      imgSrc: img,
      title: "FALL WINTER 2022",
      description: "Alibi Collection",
    },
    {
      imgSrc: img1,
      title: "ALIBI X LEE LEVI",
      description: "The sweats & the ribbed collections by Lee Levi",
    },
    {
      imgSrc: img2,
      title: "VISIT OUR PRODUCTS",
      description: "The ultimate sweats collection.",
    },
  ];

  return (
    <div className="home mb-4">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={item.imgSrc} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="px-4 px-lg-5 mt-5">
        <Categories />
      </div>
    </div>
  );
}

export default Home;
