import { React, useEffect, useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const HexaChart = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = () => {
            setData(props.data[2].data);
        };
        loadData();
    }, [props.data]);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart style={{ backgroundColor: "#282D30" }} cx="50%" cy="50%" outerRadius="75%" data={data}>
                <PolarGrid stroke={"white"} />
                <PolarAngleAxis dataKey="kind" fontSize={"12px"} stroke="white" />
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default HexaChart;
