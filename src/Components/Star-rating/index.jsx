import "./styles.css";
import React, { useState } from "react";
// import { FaStar } from "react-icon/fa";
import { FaStar } from "react-icons/fa"; // Correct import

export default function StarRating({ noOfStars = 5 }) {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);
  let starArray = new Array(noOfStars).fill(0);
  function mouseEnterHandler(id) {
    setHover(id);
  }
  function mouseLeaveHandler(id) {
    setHover(rating);
  }
  function clickHandler(id) {
    setRating(id);
  }
  return (
    <div className="starRating">
      <h1>Star Rating</h1>
      {starArray.map((item, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onMouseEnter={() => mouseEnterHandler(index)}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => clickHandler(index)}
          />
        );
      })}
    </div>
  );
}
