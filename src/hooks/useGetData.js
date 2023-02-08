import { useState, useEffect, useCallback } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Could not fetch data!");

      const data = await response.json();

      const [results] = Object.keys(data);
      setData(data[results]);
    } catch (error) {
      setError(
        "Something went wrong! Check your internet connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
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
