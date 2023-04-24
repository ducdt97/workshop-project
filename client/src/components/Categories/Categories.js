import { Link } from "react-router-dom";
import img from "../../images/4.webp"
import img1 from "../../images/5.jpg"
import "./Categories.css"

function Categories() {
  return (
    <div className="categories">
      <div className="col1">
        <img className="img1" src={img} alt="" />
        <Link to="/products/1" className="btn btn1">Men</Link>
      </div>
      <div className="col1">
        <img className="img1" src={img1} alt="" />
        <Link to="/products/2" className="btn btn1">Woman</Link>
      </div>
    </div>
  );
}

export default Categories;
