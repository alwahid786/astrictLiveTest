import React from "react";

const colors = ["#12284C", "#E0592A", "#006937", "#6AAAE4"];

const VectorDivider = ({ perLineHeight = 10 }) => {
  return (
    <div className="w-full">
      {colors.map((color, index) => {
        return (
          <span
            key={index}
            className="w-full block"
            style={{ minHeight: `${perLineHeight}px`, backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

export default VectorDivider;
