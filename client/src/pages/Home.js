import Categories from "../components/Categories/Categories";
import img from "../images/6.webp";
import img1 from "../images/7.webp";
import img2 from "../images/8.webp";
<<<<<<< HEAD
function Home() {
=======

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

>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
  return (
    <div className="home mb-4">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
<<<<<<< HEAD
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>FALL WINTER 2022</h5>
              <p>Alibi Collection</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>ALIBI X LEE LEVI</h5>
              <p>The sweats & the ribbed collections by Lee Levi</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>VISIT OUR PRODUCTS</h5>
              <p>The ultimate sweats collection.</p>
            </div>
          </div>
=======
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
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
<<<<<<< HEAD
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
=======
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
<<<<<<< HEAD
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container px-4 px-lg-5 mt-5">
=======
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="px-4 px-lg-5 mt-5">
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
        <Categories />
      </div>
    </div>
  );
}

export default Home;
