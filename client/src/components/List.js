import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

function List({catId, subCats}) {
    const apiUrl = "http://localhost:1337";
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl + `/api/products?populate=*&[filters][categories][id]=${catId}`);
        setData(res.data.data);     
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data)
    return (
        <>
            {data.map(item =>( <Card item={item} key={item.id} />))}
        </>
    )
}

export default List;