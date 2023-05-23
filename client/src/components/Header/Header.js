import img from "../../images/3.png";
import "./Header.css"

function Header() {
    return (
      <header className="head">
          <div className="banner">
              <img src={img} className="banner-image"/>
          </div>
      </header>
    )
}

export default Header;
