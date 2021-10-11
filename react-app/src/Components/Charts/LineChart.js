import { React, useEffect, useState } from "react";
import { LineChart, XAxis, Tooltip, Line, Label, ResponsiveContainer } from "recharts";
import propTypes from "prop-types";
const MoyenneChart = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = () => {
            setData(props.data[3].sessions);
        };
        loadData();
    }, [props.data]);
    return (
        <ResponsiveContainer>
            <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ backgroundColor: "#FF0000" }} width={280} height={120} data={data}>
                <XAxis dataKey="day" tick={{ stroke: "white", strokeWidth: 1 }} tickLine={false} axisLine={false} />
                <Label value="Durée moyenne des sessions" color={"black"} position={"center"} />
                <Tooltip />
                <Line activeDot="true" legendType="none" type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2.5} />
            </LineChart>
        </ResponsiveContainer>
    );
};
MoyenneChart.propTypes={
    data:propTypes.array
}
export default MoyenneChart;
