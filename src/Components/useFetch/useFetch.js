import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error("Failed to get Data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(loading, error, data);

  return { loading, error, data };
}
