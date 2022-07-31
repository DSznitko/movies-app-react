import React, { useState,useEffect } from "react";

const fetchData = async (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loadingData, setLoadingData] = useState(false)

useEffect(() => {
  setLoadingData(true)
  const response = await fetch(url);
  if(!response.ok) {
    setErrorMsg("something went wrong")
    setLoadingData(false)
  }
  const data = await response.json();
  setFetchedData(data.results);
  setLoadingData(false)

},[])

 
  return { fetchData, fetchedData,errorMsg,loadingData };
};

export default fetchData;
