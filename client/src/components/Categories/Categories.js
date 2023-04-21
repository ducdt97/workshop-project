import img from "../../images/4.webp"
import img1 from "../../images/5.jpg"
import "./Categories.css"

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <img className="img1" src={img} alt="" />
        <button className="btn1">Men</button>
      </div>
      <div className="col">
        <img className="img1" src={img1} alt="" />
        <button className="btn1">Woman</button>
      </div>
    </div>
  );
}

export default Categories;
