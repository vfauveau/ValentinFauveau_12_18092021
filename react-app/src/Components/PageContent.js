import React from "react";
import "../Styles/PageContent.css";
import BarCharts from "./BarCharts";
import HexaChart from "./HexaChart";
import MoyenneChart from "./LineChart";
import ProgChart from "./DailyProgressionChart";
import DataIndicator from "./DataIndicator";
import fireIcon from "../assets/fire.svg"
import cheeseburgerIcon from "../assets/cheeseburger.svg"
import appleIcon from "../assets/apple.svg"
import proteinesIcon from "../assets/proteines.svg"

const PageContent = (props) => {
    return (
        <div className="content-main">
            <header className="content-header">
                <h1 className="content-header-welcome">Bienvenue {props.name}</h1>
                <p className="content-header-message">Message de Bienvenue</p>
            </header>
            <div className="content-charts-wrapper">
                <div>
                    <div className="Large-ChartWrapper">
                        <BarCharts></BarCharts>
                    </div>

                    <div className="content-charts">
                        <div className="chartWrapper">
                            <MoyenneChart></MoyenneChart>
                        </div>
                        <div className="chartWrapper">
                            <HexaChart></HexaChart>
                        </div>
                        <div className="chartWrapper">
                            <ProgChart />
                        </div>
                    </div>
                </div>
                <div className="content-data-indicator-column">
                    <DataIndicator type={"Calories"} icon={fireIcon} iconSize={"20px"} color={"rgb(255, 0, 0, 0.07)"}/>
                    <DataIndicator type={"Protéines"} icon={proteinesIcon} iconSize={"20px"} color={"#4AB8FF1A"}/>
                    <DataIndicator type={"Glucides"} icon={appleIcon} iconSize={"20px"} color={"rgb(249, 206, 35, 0.2)"}/>
                    <DataIndicator type={"Lipides"} icon={cheeseburgerIcon} iconSize={"20px"} color={"#FD51811A"}/>
                </div>
            </div>
        </div>
    );
};

export default PageContent;
