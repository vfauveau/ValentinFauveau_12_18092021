import React from "react";

const CustomLabel = ({ viewBox, perct }) => {
    const { cx, cy } = viewBox;
    return (
        <React.Fragment>
            <text x={cx - 15} y={cy - 5}>
                <tspan
                    style={{
                        fontWeight: 700,
                        fontSize: "26px",
                        fill: "#282D30",
                        fontFamily: "Roboto",

                    }}
                >
                    {perct + "%"}
                </tspan>
            </text>
            <text x={cx - 50} y={cy + 15}>
                <tspan
                    style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        fill: "#A9A9A9",
                        fontFamily: "Roboto",
                    }}
                >
                    De votre objectif
                </tspan>
            </text>
        </React.Fragment>
    );
};

export default CustomLabel;
