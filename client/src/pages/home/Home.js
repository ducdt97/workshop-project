import Categories from "../../components/Categories/Categories";
import img from "../../images/6.webp";
import img1 from "../../images/7.webp";
import img2 from "../../images/8.webp";
import img3 from "../../images/1.png";
import img4 from "../../images/2.png";
import img5 from "../../images/3.png";
import img6 from "../../images/4.png";
import img7 from "../../images/5.png";
import "./Home.css";

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

  const list = [
    {
      title: "Free Shipping",
      text: "When order over $75",
      class: "bi bi-truck",
    },
    {
      title: "24/7 Support",
      text: "Get support all day",
      class: "bi bi-telephone-plus-fill",
    },
    {
      title: "Refund",
      text: "Get refund within 3 days!",
      class: "bi bi-arrow-repeat",
    },
  ];

  const logo = [
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
  ];

  return (
    <div className="home mb-4">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-interval="3000"
      >
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div class="list-section pt-80 pb-80">
        <div class="container">
          <div class="row">
            {list.map((li, index) => (
              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
                <div class="list-box d-flex align-items-center">
                  <div class="list-icon">
                    <i class={li.class}></i>
                  </div>
                  <div class="content">
                    <h3>{li.title}</h3>
                    <p>{li.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="product-section mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <h3>
                  <span class="orange-text">Our</span> Categories
                </h3>
                <p>
                  Include men and women with a wide variety of high quality
                  products suitable for young people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 px-lg-5">
        <Categories />
      </div>
      <div class="logo-carousel-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="logo-carousel-inner d-flex">
                {logo.map((log, index) => (
                  <div class="single-logo-item" key={index}>
                    <img src={log.image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
