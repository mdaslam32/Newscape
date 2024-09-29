import { useEffect, useState } from "react";

const useGetData = (category) => {
  const [articles, setArticles] = useState([]);

  const url = `https://newsdata.io/api/1/latest?apikey=${
    import.meta.env.VITE_API_KEY
  }&category=${category}&country=in&language=en&image=1&removeduplicate=1`;

  const getdata = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setArticles(json.results);
  };

  useEffect(() => {
    getdata();
  }, [category]);

  return articles;
};

export default useGetData;
