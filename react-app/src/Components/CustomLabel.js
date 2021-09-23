import React from "react";

const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
    const { cx, cy } = viewBox;
    return (
      <React.Fragment>
        <text x={cx - 10} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "1.5em",
              fill: "#2B5CE7",
              fontFamily: "Roboto"
            }}
          >
            {noOfBubbleTeaSold + "%"}
          </tspan>
        </text>
        <text x={cx - 50} y={cy + 15}>
          <tspan
            style={{
              fontSize: "0.8em",
              fill: "#A9A9A9",
              fontFamily: "Roboto"
            }}
          >
            De votre objectif
          </tspan>
        </text>
      </React.Fragment>
    );
  };

  export default CustomLabel