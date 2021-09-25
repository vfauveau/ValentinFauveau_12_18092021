import { React, useEffect, useState } from "react";
import { ResponsiveContainer,LineChart, XAxis, Tooltip, Legend, Line } from "recharts";

const url = "http://localhost:3000/user/12/average-sessions"

const MoyenneChart = () => {
    const [averageS, setAverageS] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setAverageS(data.data.sessions);
    };

    return (
        <ResponsiveContainer>
            <LineChart style={{backgroundColor:"#FF0000"}} width={369} height={269} data={averageS} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MoyenneChart;
