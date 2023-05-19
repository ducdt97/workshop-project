import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
<<<<<<< HEAD
  const [data, setData] = useState(null);
=======
  const [data, setData] = useState([]);
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiUrl = "http://localhost:1337/api"

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
<<<<<<< HEAD
        console.log(url, 'url');
=======
>>>>>>> 5d980f6467e5b2d570bd5bac4fb2e44aed075a1a
        const res = await axios.get(apiUrl + url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
