import React, { useRef } from "react";
import "./ScrollTopandBottom.css";
import useFetch from "./useFetch";

const ScrollTopandBottom = () => {
  const { error, loading, data } = useFetch(
    "https://dummyjson.com/products?limit=190"
  );
  const bottomRef = useRef(null);
  if (error) {
    return <p>{error}</p>;
  }

  const handleScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrolltoBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll">
      <h1>Scroll to bottom and top</h1>
      <button onClick={handleScrolltoBottom}>Scroll to bottom</button>
      <div className="data">
        {loading && <p>Loading please wait!</p>}
        <ul>
          {data.products &&
            data.products.length > 0 &&
            data.products.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
      <button ref={bottomRef} onClick={handleScrolltoTop}>
        Scroll to top
      </button>
    </div>
  );
};

export default ScrollTopandBottom;
