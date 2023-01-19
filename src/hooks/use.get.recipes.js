import { useState, useEffect, useCallback } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error();
      const data = await response.json();
      const [results] = Object.keys(data);
      setData(data[results]);
    } catch (error) {
      setError("Something went wrong!");
    }

    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    isLoading,
    error,
    setError,
  };
};

export default useGetData;
