import { React, useEffect, useState } from "react";
import { LineChart, XAxis, Tooltip, Line, Label, ResponsiveContainer } from "recharts";

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
            <LineChart style={{ backgroundColor: "#FF0000" }} width={280} height={120} data={data}>
                <XAxis dataKey="day" tick={{ stroke: "white", strokeWidth: 1 }} tickLine={false} axisLine={false} />
                <Label value="Durée moyenne des sessions" color={"black"} position={"center"} />
                <Tooltip
                    contentStyle={{ width: "39px", height: "25px", padding: "0" }}
                    itemStyle={{ width: "39px", height: "25px", padding: "0" }}
                    labelStyle={{ width: "39px", height: "25px", padding: "0" }}
                    wrapperStyle={{ width: "39px", height: "25px", padding: "0" }}
                    dataKey="sessionLength"
                    formatter=""
                />
                <Line activeDot="true" legendType="none" type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2.5} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MoyenneChart;
