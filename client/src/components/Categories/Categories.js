import { Link } from "react-router-dom";
import img from "../../images/4.webp"
import img1 from "../../images/5.webp"
import "./Categories.css"

function Categories() {
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
    </div>
  );
}

export default Categories;
