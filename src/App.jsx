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
import LightDarkMode from "./Components/Dark-Light theme/LightDarkMode.jsx";
import ProgressBar from "./components/ProgressBar/ProgressBar.jsx";
import Tabs from "./Components/CustomTabs/Tabs/Tabs.jsx";
import TabsTest from "./Components/CustomTabs/TabsTest.jsx";
import ModalButton from "./Components/Modal/ModalButton.jsx";
import GithubProfile from "./Components/Git-Hub Profile/GithubProfile.jsx";
import AutoComplete from "./Components/Search AutoComplete/AutoComplete.jsx";
import TicTacToe from "./Components/TicTacToe/TicTacToe.jsx";
import Parent from "./Components/useFetch/Parent.jsx";
import OnclickParent from "./Components/useOnclickOutside/OnclickParent.jsx";
import UseWindowResizeParent from "./Components/useWindowResize/useWindowResizeParent.jsx";
import ScrollTopandBottom from "./Components/Scroll Top and Bottom/ScrollTopandBottom.jsx";

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
      {/* <QRCodeGenerator /> */}

      {/* dark and light theme mode  */}
      {/* <LightDarkMode /> */}

      {/* progress bar project  */}
      {/* <ProgressBar url="https://dummyjson.com/products?limit=100" /> */}

      {/* create custom tabs  */}
      {/* <TabsTest /> */}

      {/* create a modal  */}
      {/* <ModalButton /> */}

      {/* git hub profile finder  */}
      {/* <GithubProfile /> */}

      {/* search auto-complete project  */}
      {/* <AutoComplete /> */}

      {/* tic tac toe project  */}
      {/* <TicTacT<oe /> */}

      {/* use fetch custom hook  */}
      {/* <Parent /> */}

      {/* use onclick outside custom hook used for modals  */}
      {/* <OnclickParent /> */}

      {/* use window resize hookk  */}
      {/* <UseWindowResizeParent /> */}

      {/* scroll to top and bottom  */}
      <ScrollTopandBottom />
    </div>
  );
};

export default App;
