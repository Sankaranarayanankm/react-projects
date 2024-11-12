import React, { useLayoutEffect, useState } from "react";
import useWindowResize from "./useWindowResize";

const UseWindowResizeParent = () => {
  const windowSize = useWindowResize();
  return (
    <div>
      <h1>use window resize hook</h1>
      <p>width is {windowSize.width}</p>
      <p>height is {windowSize.height}</p>
    </div>
  );
};

export default UseWindowResizeParent;
