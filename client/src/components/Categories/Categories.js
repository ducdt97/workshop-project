import { Link } from "react-router-dom";
import img from "../../images/4.webp"
import img1 from "../../images/5.webp"
import "./Categories.css"

function Categories() {
<<<<<<< HEAD
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
=======
  const cateList = [
    {
      title: "Men",
      link: "/products/1",
      source: img,
    },
    {
      title: "Women",
      link: "/products/2",
      source: img1,
    },
  ]

  return (
    <div className="categories">
      {cateList.map((item, index) => (
      <div className="col1" key={index}>
        <img className="img1" src={item.source} alt="" />
        <Link to={item.link} className="btn btn1">{item.title}</Link>
      </div>
      ))}
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
    </div>
  );
}

export default Categories;
