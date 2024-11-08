import React, { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  // function to get data from API
  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      if (!response.ok) {
        throw new Error("Failed to get data");
      }
      const result = await response.json();
      if (result && result.products && result.products.length) {
        // Append the newly fetched products to the existing data
        setData((prev) => [...prev, ...result.products]);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [count]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => setCount(0)}>Retry</button>
      </div>
    );
  }

  return (
    <div className="loadMore">
      <h1>Cart Items</h1>
      {loading && <p>Loading....</p>}
      <div className="loadMore__cart">
        {data.map((item) => (
          <div className="loadMore__products" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              height={200}
              width={200}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="loadMore__button">
        <button
          disabled={data.length == 100}
          onClick={() => setCount((prev) => prev + 1)}
        >
          {data.length == 100
            ? "You have Reached 100 Products"
            : "Load More Products"}
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
