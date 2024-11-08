import React, { useState } from "react";
import "./QRCode.css";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [generateCode, setGenerateCode] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setGenerateCode(value);
    setValue("");
  };
  return (
    <div className="qrCode">
      <h1>QR Code Generator </h1>

      <form onSubmit={submitHandler}>
        {" "}
        <input
          placeholder="Enter your value here"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={value.trim() == ""} type="submit">
          Generate
        </button>
      </form>
      <QRCode size={256} value={generateCode} viewBox={`0 0 256 256`} />
    </div>
  );
};

export default QRCodeGenerator;
