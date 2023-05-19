function Footer() {
<<<<<<< HEAD
=======
  const socialMediaLinks = [
    {
      backgroundColor: "#3b5998",
      href: "https://www.facebook.com/",
      icon: "bi bi-facebook",
    },
    {
      backgroundColor: "#55acee",
      href: "https://twitter.com/",
      icon: "bi bi-twitter",
    },
    {
      backgroundColor: "#dd4b39",
      href: "https://www.google.com/",
      icon: "bi bi-google",
    },
    {
      backgroundColor: "#ac2bac",
      href: "https://www.instagram.com/",
      icon: "bi bi-instagram",
    },
    {
      backgroundColor: "#0082ca",
      href: "https://www.linkedin.com/",
      icon: "bi bi-linkedin",
    },
    {
      backgroundColor: "#333333",
      href: "https://github.com/",
      icon: "bi bi-github",
    },
  ];

>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
  return (
    <footer className="bg-secondary text-center text-white">
      <div className="container p-4 pb-0">
        <div className="text-dark my-0 p-2">
<<<<<<< HEAD
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
=======
          <span>--- Contact with us ---</span>
        </div>
        <section className="mb-4">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: link.backgroundColor }}
              href={link.href}
              target="_blank"
              role="button"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </section>
      </div>

      <div className="text-center p-3 bg-black">
        © 2023 Copyright:
        <span> Workshop</span>
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
      </div>
    </footer>
  );
}

export default Footer;
