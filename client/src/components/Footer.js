function Footer() {
  return (
    <footer className="bg-secondary text-center text-white">
      <div className="container p-4 pb-0">
        <div className="text-dark my-0 p-2">
            <span>--- Contact with us ---</span>
        </div>
        <section className="mb-4">
          <a
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#3b5998"}}
            href="https://www.facebook.com/"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#55acee"}}
            href="https://twitter.com/"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#dd4b39"}}
            href="https://www.google.com/"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#ac2bac"}}
            href="https://www.instagram.com/"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#0082ca"}}
            href="https://www.linkedin.com/"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn text-white btn-floating m-1"
            style={{backgroundColor: "#333333"}}
            href="https://github.com/"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{backgroundColor: "black"}}
      >
        © 2023 Copyright:   
        <span>
          Workshop
        </span>
      </div>
    </footer>
  );
}

export default Footer;
