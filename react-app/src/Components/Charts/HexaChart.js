import { React, useEffect, useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PolarRadiusAxis } from "recharts";
import propTypes from "prop-types";
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
            <RadarChart width={130} height={130} style={{ backgroundColor: "#282D30" }} cx="50%" cy="50%" outerRadius="65%" data={data}>
                <PolarGrid stroke={"white"} />
                <PolarAngleAxis tickCount={4} tickLine={false} dataKey="kind" fontSize={"12px"} stroke="white" />
                <PolarRadiusAxis tick={false} tickCount={4} tickLine={false} axisLine={false} />
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
            </RadarChart>
        </ResponsiveContainer>
    );
};
HexaChart.propTypes = {
    data: propTypes.array,
};
export default HexaChart;
