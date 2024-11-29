import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      response = await response.json();
      setData(response);
      console.log(data);
    };
    fetchData();
  }, [url]);
  return { data };
};

export default UseFetch;
