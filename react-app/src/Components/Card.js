import React from "react";
import "../Styles/DataIndicator.css";
import Icon from "./Icon";
import propTypes from "prop-types"

/** User cards where informations are displayed */
const Card = (props) => {
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

Card.propTypes = {
    keyData: propTypes.string,
    icon: propTypes.string,
    color: propTypes.string,
    iconSize: propTypes.string,
    type:propTypes.string
}
export default Card;
