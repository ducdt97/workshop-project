import img from "../../images/3.png";

function Header() {
    return (
      <header className="head hbody">
          <div className="banner">
              <img src={img} style={{width: "1520px"}}/>
          </div>
      </header>
    )
}

export default Header;
