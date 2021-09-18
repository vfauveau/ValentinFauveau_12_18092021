import React from "react";
import { BarChart, CartesianGrid, XAxis, Tooltip, Legend, Bar } from "recharts";

const data = [
    {
        name: "Page A",
        kCal: 4000,
        kg: 2400,
    },
    {
        name: "Page B",
        kCal: 3000,
        kg: 1398,
    },
    {
        name: "Page C",
        kCal: 2000,
        kg: 9800,
    },
    {
        name: "Page D",
        kCal: 2780,
        kg: 3908,
    },
    {
        name: "Page E",
        kCal: 1890,
        kg: 4800,
    },
    {
        name: "Page F",
        kCal: 2390,
        kg: 3800,
    },
    {
        name: "Page G",
        kCal: 3490,
        kg: 4300,
    },
];

const BarCharts = () => {
    return (
        <BarChart width={835} height={320} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar name="Poids (kg)" barSize={7} dataKey="kg" fill="#282D30" radius={[3.5, 3.5, 0, 0]} />
            <Bar name="Calories brûlées (kCal)" barSize={7} dataKey="kCal" fill="#E60000" radius={[3.5, 3.5, 0, 0]} />
        </BarChart>
    );
};

export default BarCharts;
