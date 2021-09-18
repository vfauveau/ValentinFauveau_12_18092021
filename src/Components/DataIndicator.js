import React from "react";
import "../Styles/DataIndicator.css";
import Icon from "./Icon";


const DataIndicator = (props) => {
    return (
        <div className="data-indicator">
            <Icon icon={props.icon} color={props.color} size={"60px"} iconSize={props.iconSize}/>
            <div>
                <strong className="data-indicator-value">{"aaaa"}</strong>
                <p className="data-indicator-type">aaaa</p>
            </div>
        </div>
    );
};

export default DataIndicator;
