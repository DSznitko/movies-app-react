import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [url]);

  return { isLoading, error, data };
};

export default useFetchData;
