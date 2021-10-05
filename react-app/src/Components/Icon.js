import React from "react";
/**
 * Create square icons.
 * property icon is the path to the icon.svg
 * @ReactComponent
 */
const Icon = (props) => {
    return (
        <div
            style={{
                width: props.size,
                height: props.size,
                backgroundColor: props.color,
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:"6px"
            }}
        >
            <img src={props.icon} alt={props.icon} style={{ width: props.iconSize, height: props.iconSize}}></img>
        </div>
    );
};

export default Icon;
