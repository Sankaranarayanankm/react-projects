import React from "react";
import "./App.css";
import RandomColor from "./Components/Color-picker/RandomColor/RandomColor";
import StarRating from "./Components/Star-rating/index.jsx";
import ImageSlider from "./Components/ImageSlider/ImageSlider.jsx";

const App = () => {
  return (
    <div className="app">
      {/* random color project */}
      {/* <RandomColor /> */}

      {/* star rating project  */}
      {/* <StarRating noOfStars={8} /> */}

      {/* image slider project  */}
      <ImageSlider />
    </div>
  );
};

export default App;
