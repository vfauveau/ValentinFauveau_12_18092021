import { React, useEffect, useState } from "react";
import { Pie, PieChart, Cell, Label } from "recharts";
import CustomLabel from "../CustomChartElements/CustomLabel.js";

const ProgChart = (props) => {
    const [perct, setPerct] = useState(0);
    const [data, setData] = useState([0]);

    useEffect(() => {
        const loadData = async () => {
            setPerct(props.data[0].todayScore);
            setData([
                { value: perct, name: "dailyProg" },
                { value: 1 - perct, name: "difference" },
            ]);
        };
        loadData();
    }, [perct, props.data]);

    return (
        <PieChart position="center" width={260} height={260}>
            <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={72} outerRadius={85}>
                {data.map((entry, index) => {
                    if (index === 1) {
                        return <Cell key={`cell-${index}`} fill="lightgrey" />;
                    }
                    return <Cell key={`cell-${index}`} fill="#E60000" />;
                })}
                <Label content={<CustomLabel perct={perct * 100} />} position="center" />
            </Pie>
        </PieChart>
    );
};

export default ProgChart;
