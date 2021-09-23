import React from "react";
import "../Styles/DataIndicator.css";
import Icon from "./Icon";


const DataIndicator = (props) => {
    return (
        <div className="data-indicator">
            <Icon icon={props.icon} color={props.color} size={"60px"} iconSize={props.iconSize}/>
            <div>
                <strong className="data-indicator-value">{props.keyData}</strong>
                <p className="data-indicator-type">{props.type}</p>
            </div>
        </div>
    );
};

export default DataIndicator;
