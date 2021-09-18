import React from "react";
import { PieChart, Pie, Label, Cell } from "recharts";
import CustomLabel from "./CustomLabel";

const data02 = [
    { name: "Bubble Tea Sold", value: 0 },
    { name: "Bubble Tea Left", value: 0 },
    { name: "no value", value: 1 },
];

const ProgChart = () => {
    return (
        <React.Fragment>
            <PieChart width={217} height={217}>
                <Pie
                    data={data02}
                    cx="50%"
                    cy="50%"
                    dataKey="value" // make sure to map the dataKey to "value"
                    innerRadius={60} // the inner and outer radius helps to create the progress look
                    outerRadius={80}
                >
                    {data02.map((entry, index) => {
                        if (index === 1 || index === 2) {
                            return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
                        }
                        return <Cell key={`cell-${index}`} fill="red" />;
                    })}
                    <Label content={<CustomLabel noOfBubbleTeaSold={data02[0].value} />} position="center" />
                </Pie>
            </PieChart>
        </React.Fragment>
    );
};

export default ProgChart;


// credit : https://celiaongsl.medium.com/2-secret-pie-chart-hacks-to-up-your-recharts-game-hack-recharts-1-9fa62ff9416a    