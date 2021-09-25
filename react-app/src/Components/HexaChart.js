import {React, useEffect, useState} from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const HexaChart = () => {
    const url = "http://localhost:3000/user/12/performance";
    const [perf, setPerf] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPerf(data.data.data)
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart style={{ backgroundColor: "#282D30" }} cx="50%" cy="50%" outerRadius="75%" data={perf}>
                <PolarGrid stroke={"white"} />
                <PolarAngleAxis fontSize={"12px"} stroke="white" />
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default HexaChart;
