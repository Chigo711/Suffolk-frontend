import React from "react";

function Button({ className, title, textStyle }) {
  return (
    <button className={className}>
      <span style={textStyle}>{title}</span>
    </button>
  );
}

export default Button;
