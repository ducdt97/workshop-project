import useFetch from "../hooks/useFetch";
import Card from "./Card";

function List({catId, subCats, sort}) {
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`)}&sort=price:${sort}`) 
  
    return (
        <>
            {data?.map((item) => <Card item={item} key={item.id} />)}
        </>
    )
}

export default List;