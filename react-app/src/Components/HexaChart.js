import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

const data = [
    {
        subject: "Intensité",
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: "Vitesse",
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: "Force",
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: "Endurance",
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: "Energy",
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: "Cardio",
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const HexaChart = () => {
    return (
        <React.Fragment>
            <RadarChart outerRadius={45} width={250} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#F0101B2 70%" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </React.Fragment>
    );
};

export default HexaChart;


// TO DO STYLE