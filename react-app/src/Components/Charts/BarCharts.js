import { React, useState, useEffect } from "react";
import {BarChart, CartesianGrid, XAxis, Tooltip, Legend, Bar, YAxis } from "recharts";

const BarCharts = (props) => {
    const url = "http://localhost:3000/user/" + props.id + "/activity";
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        loadData();
    });

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setSessions(data.data.sessions);
    };
    return (
        <div width={835} height={320}>
            <div>
                <Legend/>
            </div>
            <BarChart width={835} height={210} data={sessions}>
                <CartesianGrid vertical={false} strokeDasharray="4 4" />
                <XAxis dataKey="day" />
                <YAxis orientation={"right"} type="number" domain={["dataMin-2", "dataMax+3"]} dataKey="kilogram" />
                <Tooltip
                    wrapperStyle={{ width: "200px", height: "63px" }}
                    itemStyle={{ backgroundColor: "#E60000", color: "white" }}
                    contentStyle={{ backgroundColor: "#E60000", color: "white" }}
                    labelFormatter={() => {
                        return "";
                    }}
                />
                <Bar name="Poids (kg)" barSize={7} dataKey="kilogram" fill="#282D30" radius={[3.5, 3.5, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" barSize={7} dataKey="calories" fill="#E60000" radius={[3.5, 3.5, 0, 0]} />
            </BarChart>
        </div>
    );
};

export default BarCharts;
