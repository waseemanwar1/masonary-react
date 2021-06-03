import React from "react";

// The number of columns change by resizing the window
const Button = (props) => {
  return (
    <>
      <button className={props.sim_btn === "true" ? "s-btn" : "btn"}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
