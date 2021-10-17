import { React, useEffect, useState } from "react";
import { AreaChart, XAxis, Tooltip, Area } from "recharts";
import propTypes from "prop-types";
import "../../Styles/Charts.css";
/**
 * Chart component session length per day
 * @param {any} props = data
 * @returns {any}
 */
const Line = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = () => {
            setData(props.data[3].sessions);
        };
        loadData();
    }, [props.data]);

    /** Custom Tooltip Content function*/
    function CustomTooltip({ active, payload }) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-areaChart">
                    <p className="label">{`${payload[0].value}min`}</p>
                </div>
            );
        }

        return null;
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#FF0000", height: "263px", justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: "#FF0000", height: "48px", width:"147px", color: "#FFFFFF", fontSize: "15px", fontWeight: "500", opacity: "0.5", paddingTop:"29px" }}>
                Durée moyenne des sessions
            </div>
            <AreaChart width={263} height={200} margin={{ top: 5, right: 0, left: 0, bottom: 5 }} style={{ backgroundColor: "#FF0000" }} data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF0010" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="white" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    interval={"preserveStartEnd"}
                    padding={{ left: 10, right: 10 }}
                    dataKey="day"
                    tick={{ stroke: "white", strokeWidth: 1, fontSize: 12, fontWeight: 400 }}
                    tickLine={false}
                    axisLine={false}
                    type={"category"}
                    opacity={0.5}
                />
                <Tooltip content={<CustomTooltip />} dataKey="sessionLength" wrapperStyle={{ width: 39, height: 25 }} labelFormatter={(a) => (a = "")} />
                <Area unit="min" fill="url(#colorUv)" dot={false} activeDot="true" type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2.5} connectNulls={true} />
            </AreaChart>
        </div>
    );
};
Line.propTypes = {
    data: propTypes.array,
};
export default Line;
