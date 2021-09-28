import React from "react";
import "../Styles/Sidebar.css"
import Icon from "./Icon";
import meditationIcon from "../assets/meditation.svg"
import musculationIcon from "../assets/musculation.svg"
import natationIcon from "../assets/natation.svg"
import bikeIcon from "../assets/bike.svg"

//Sidebar component which displays different icons
const Sidebar  = () => {
    return <aside id="sidebar" className="Sidebar">
        <div className="sidebar-icons-wrapper">
            <Icon color={"#FFFFFF"} size={"64px"} icon={meditationIcon}></Icon>
            <Icon color={"#FFFFFF"} size={"64px"} icon={natationIcon}></Icon>
            <Icon color={"#FFFFFF"} size={"64px"} icon={bikeIcon}></Icon>
            <Icon color={"#FFFFFF"} size={"64px"} icon={musculationIcon}></Icon>
        </div>
        <div>
            <p>Copyright, SportSee 2020 </p>
        </div>
    </aside>
}

export default Sidebar