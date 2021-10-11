import React from "react";
import propTypes from "prop-types"
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

Icon.propTypes={
    size: propTypes.string,
    color: propTypes.string,
    icon: propTypes.string,
    iconSize: propTypes.string
}
export default Icon;
