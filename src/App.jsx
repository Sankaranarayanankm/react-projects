import React from "react";
import "./App.css";
import RandomColor from "./Components/Color-picker/RandomColor/RandomColor";
import StarRating from "./Components/Star-rating/index.jsx";

const App = () => {
  return (
    <div className="app">
      {/* random color project */}
      {/* <RandomColor /> */}

      <StarRating noOfStars={8} />
    </div>
  );
};

export default App;
