import React from "react";
import "../Styles/PageContent.css";
import propTypes from "prop-types";
import BarCharts from "./Charts/BarCharts";
import HexaChart from "./Charts/HexaChart";
import MoyenneChart from "./Charts/LineChart";
import ProgChart from "./Charts/DailyProgressionChart";
import Card from "./Card";
import fireIcon from "../assets/fire.svg";
import cheeseburgerIcon from "../assets/cheeseburger.svg";
import appleIcon from "../assets/apple.svg";
import proteinesIcon from "../assets/proteines.svg";

const PageContent = (props) => {
    return (
        <div className="content-main">
            <header className="content-header">
                <h1 className="content-header-welcome">
                    Bienvenue <strong className="content-header-welcome-userName">{props.name}</strong>
                </h1>
                <p className="content-header-message">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className="content-charts-wrapper">
                <div>
                    <div className="Large-ChartWrapper">
                        <BarCharts id={props.id}></BarCharts>
                    </div>

                    <div className="content-charts">
                        <div className="chartWrapper">
                            <MoyenneChart id={props.id}></MoyenneChart>
                        </div>
                        <div className="chartWrapper">
                            <HexaChart id={props.id}></HexaChart>
                        </div>
                        <div className="chartWrapper">
                            <p style={{ fontWeight: "600", paddingLeft: "30px", paddingTop: "24px", position: "absolute" }}>Score</p>
                            <ProgChart id={props.id} />
                        </div>
                    </div>
                </div>
                <div className="content-data-indicator-column">
                    <Card keyData={props.keyData.calorieCount + "kCal"} type={"Calories"} icon={fireIcon} iconSize={"20px"} color={"rgb(255, 0, 0, 0.07)"} />
                    <Card keyData={props.keyData.proteinCount + "g"} type={"Protéines"} icon={proteinesIcon} iconSize={"20px"} color={"#4AB8FF1A"} />
                    <Card keyData={props.keyData.carbohydrateCount + "g"} type={"Glucides"} icon={appleIcon} iconSize={"20px"} color={"rgb(249, 206, 35, 0.2)"} />
                    <Card keyData={props.keyData.lipidCount + "g"} type={"Lipides"} icon={cheeseburgerIcon} iconSize={"20px"} color={"#FD51811A"} />
                </div>
            </div>
        </div>
    );
};
PageContent.propTypes = {
    name: propTypes.string,
    id: propTypes.string,
    icon: propTypes.string,
};
export default PageContent;
