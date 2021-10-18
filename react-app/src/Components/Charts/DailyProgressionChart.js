import { React, useEffect, useState } from "react";
import { Pie, PieChart, Cell, Label } from "recharts";
import CustomLabel from "../CustomChartElements/CustomLabel.js";
import propTypes from "prop-types";

/**
 * Large Bar Chart component
 * @param {any} props array of data
 * @returns {any}
 */
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
        <div style={{ width: "inherit", height: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "170px", height: "170px", backgroundColor: "white", borderRadius: "85px", position: "absolute" }}></div>
            <PieChart position="center" width={200} height={200}>
                <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={88} outerRadius={100}>
                    {data.map((entry, index) => {
                        if (index === 1) {
                            return <Cell key={`cell-${index}`} fill="#FBFBFB" />;
                        }
                        return <Cell key={`cell-${index}`} fill="#E60000" />;
                    })}
                    <Label content={<CustomLabel perct={perct * 100} />} position="center" />
                </Pie>
            </PieChart>
        </div>
    );
};
ProgChart.propTypes = {
    data: propTypes.array,
};
export default ProgChart;
