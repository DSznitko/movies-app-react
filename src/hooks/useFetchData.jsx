import React, { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("Something went wrong");
  const [data, setData] = useState([]);
};

export default useFetchData;
