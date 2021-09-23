import { React } from "react";
import { BarChart, CartesianGrid, XAxis, Tooltip, Legend, Bar } from "recharts";

const BarCharts = () => {
    return (
        <BarChart width={835} height={320} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip
                wrapperStyle={{ width: "200px", height: "63px" }}
                itemStyle={{ backgroundColor: "#E60000", color: "white" }}
                contentStyle={{ backgroundColor: "#E60000", color: "white" }}
                labelFormatter={() => {
                    return "";
                }}
            />
            <Legend />
            <Bar name="Poids (kg)" barSize={7} dataKey="kg" fill="#282D30" radius={[3.5, 3.5, 0, 0]} />
            <Bar name="Calories brûlées (kCal)" barSize={7} dataKey="kCal" fill="#E60000" radius={[3.5, 3.5, 0, 0]} />
        </BarChart>
    );
};

export default BarCharts;
