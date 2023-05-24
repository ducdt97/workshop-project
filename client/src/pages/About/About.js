import "./About.css"
function About() {
  return (
    <div className="aboutus-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="aboutus">
              <h2 className="aboutus-title">About Us</h2>
              <p className="aboutus-text">
                Whilst our desire to travel will not disappear, how we travel
                will never be the same.
              </p>
              <p className="aboutus-text">
                Provides customers with stylish, bacterially-defensive,
                ecologically-sustainable essentials.
              </p>
              <a className="aboutus-more" href="...">
                read more
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="aboutus-banner">
              <img
                src="https://cdn.shopify.com/s/files/1/0417/6130/8825/files/about-page.jpg?v=1602851485"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="feature">
              <div className="feature-box mb-5">
                <div className="clearfix">
                  <div className="iconset">
                    <i className="bi bi-code-square icon"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Work with heart</h4>
                    <p>
                      if you are commuting by train, taxi; travelling on a
                      plane; working out at the gym or just lounging at home,
                      alibi. products act as fashionable armour against
                      bacteria. our products are designed to protect wearers
                      with the support of silvadurtm, a dupont technology, that
                      leverages silver ions to create antimicrobial properties
                      in our fabrics to prevent the growth of bacteria, mould
                      and mildew.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature-box">
                <div className="clearfix">
                  <div className="iconset">
                    <i className="bi bi-code-square icon"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Reliable services</h4>
                    <p>
                      Silvadur™ by dupont uses a technology consisting of silver
                      ions that prevents fabrics from developing microorganism
                      reproduction and build up on the surface. this innovative
                      technology provides an equal distribution of silver ions
                      to ensure comprehensive protection. water resistant and
                      stretchy, alibi. pieces are made from a comfortable,
                      durable fabric that feels light and breathable - ideal for
                      any scenario.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
