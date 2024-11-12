import React, { useRef, useState } from "react";
import useOutsideClick from "./useOnclickOutside";

const OnclickParent = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => {
    setShowContent(false);
  });

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random Content</h1>
          <p>Please click outside to close this!!</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Click Me</button>
      )}
    </div>
  );
};

export default OnclickParent;
