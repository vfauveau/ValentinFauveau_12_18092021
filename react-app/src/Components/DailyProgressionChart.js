import { React, useEffect, useState } from "react";
import { Pie, PieChart, Cell, Label, Legend } from "recharts";
import CustomLabel from "./CustomLabel";

const ProgChart = () => {
    const url = "http://localhost:3000/user/12";
    const [perct, setPerct] = useState(0);
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPerct(data.data.todayScore);
        setData([
            { value: perct, name: "dailyProg" },
            { value: 1 - perct, name: "difference" },
        ]);
    };

    useEffect(() => {
        loadData();
    });

    return (
        <PieChart position="center" width={260} height={260}>
            <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={72} outerRadius={85}>
                {data.map((entry, index) => {
                    if (index === 1) {
                        return <Cell key={`cell-${index}`} fill="lightgrey" />; 
                    }
                    return <Cell key={`cell-${index}`} fill="#E60000" />;
                })}
                <Label content={<CustomLabel perct={perct*100} />} position="center" />
                <Legend width={100} payload={"Score"} align={"left"} verticalAlign={"top"} />
            </Pie>
        </PieChart>
    );
};

export default ProgChart;
