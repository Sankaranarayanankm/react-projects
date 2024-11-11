import React from "react";
import useFetch from "./useFetch";

const Parent = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  if (error) {
    return <p>{error}</p>;
  }
  console.log(data.products);

  return (
    <div>
      <h1>useFetch Hook</h1>
      {loading && <p>Loading.. please wait!</p>}
      <ul>
        {data.products &&
          data.products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default Parent;
