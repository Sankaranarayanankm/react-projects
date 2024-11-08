import React from "react";
import "./App.css";
import RandomColor from "./Components/Color-picker/RandomColor/RandomColor";
import StarRating from "./Components/Star-rating/index.jsx";
import ImageSlider from "./Components/ImageSlider/ImageSlider.jsx";
import LoadMore from "./Components/LoadMore/LoadMore.jsx";
import Treeview from "./Components/TreeView/Treeview.jsx";
import menu from "./Components/TreeView/data.js";
import QRCode from "./Components/QR-Code-Generator/QRCode.jsx";
import QRCodeGenerator from "./Components/QR-Code-Generator/QRCode.jsx";
const App = () => {
  return (
    <div className="app">
      {/* random color project */}
      {/* <RandomColor /> */}

      {/* star rating project  */}
      {/* <StarRating noOfStars={8} /> */}

      {/* image slider project  */}
      {/* <ImageSlider /> */}

      {/* load more project  */}
      {/* <LoadMore /> */}

      {/* Tree view/ Menu UI / Recursive Navigation menu project  */}
      {/* <Treeview menus={menu} /> */}

      {/* QR code Generator  */}
      <QRCodeGenerator />
    </div>
  );
};

export default App;
