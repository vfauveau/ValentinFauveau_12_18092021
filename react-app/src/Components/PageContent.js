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
                <h1 className="content-header-welcome">Bienvenue <strong className="content-header-welcome-userName">{props.name}</strong></h1>
                <p className="content-header-message">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
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
                            <ProgChart/>
                        </div>
                    </div>
                </div>
                <div className="content-data-indicator-column">
                    <DataIndicator keyData={props.keyData.calorieCount + "kCal"} type={"Calories"} icon={fireIcon} iconSize={"20px"} color={"rgb(255, 0, 0, 0.07)"}/>
                    <DataIndicator keyData={props.keyData.proteinCount + "g"} type={"Protéines"} icon={proteinesIcon} iconSize={"20px"} color={"#4AB8FF1A"}/>
                    <DataIndicator keyData={props.keyData.carbohydrateCount + "g"} type={"Glucides"} icon={appleIcon} iconSize={"20px"} color={"rgb(249, 206, 35, 0.2)"}/>
                    <DataIndicator keyData={props.keyData.lipidCount + "g"} type={"Lipides"} icon={cheeseburgerIcon} iconSize={"20px"} color={"#FD51811A"}/>
                </div>
            </div>
        </div>
    );
};

export default PageContent;
