import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
const ProgressBar = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);
  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const percentage = Math.floor((howMuchScrolled / height) * 100);
    setScrollProgress(percentage);
  }
  console.log(scrollProgress);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="progressBar">
      <div className="progressBar__top">
        <h1>Custom Progress Bar</h1>
        <div className="progressBar__tracking">
          <div
            className="progressBar__current"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
      {loading && <p>Loading Data please wait!</p>}
      <div className="progressBar__data">
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
