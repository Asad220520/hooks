import React from "react";

function Box({ title, text }) {
  return (
    <div id="box">
      <div className="container">
        <div className="box">
          <h1>{text}</h1>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Box;
