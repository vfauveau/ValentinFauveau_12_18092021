import { React } from "react";
import { BarChart, CartesianGrid, XAxis, Tooltip, Bar, YAxis } from "recharts";
import "../../Styles/Charts.css";
import BarChartLegend from "../CustomChartElements/BarChartLegend";
import propTypes from "prop-types";
/**
 * Double bars chart
 * @param {any} props
 * @property props.data - userData
 * @returns {any}
 */

const BarCharts = (props) => {

    function CustomTooltip({ active, payload }) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-barChart">
                    <p className="label-bar">{`${payload[0].value}Kg`}</p>
                    <p className="label-bar">{`${payload[1].value}kCal`}</p>
                </div>
            );
        }

        return null;
    }
    return (
        <div style={{width:"inherit"}}>
            <BarChartLegend />
            <BarChart width={props.chartWidth} height={250} data={props.data[1].sessions}>
                <CartesianGrid vertical={false} strokeDasharray="4 4" />
                <XAxis style={{ paddingTop: "10px" }} tickLine={false} />
                <YAxis
                    contentStyle={{ marginLeft: "20px" }}
                    yAxisId={0}
                    axisLine={false}
                    tickLine={false}
                    orientation={"right"}
                    type="number"
                    domain={["dataMin-1", "dataMax+2"]}
                    dataKey="kilogram"
                />
                <YAxis
                    domain={["0", "dataMax"]}
                    scale={"linear"}
                    yAxisId={1}
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                    orientation={"left"}
                    type="number"
                    dataKey="calories"
                />
                <Tooltip content={<CustomTooltip />}/>
                <Bar name="Kg" barSize={7} dataKey="kilogram" fill="#282D30" radius={[3.5, 3.5, 0, 0]} />
                <Bar name="Kcal" barSize={7} dataKey="calories" yAxisId={1} fill="#E60000" radius={[3.5, 3.5, 0, 0]} />
            </BarChart>
        </div>
    );
};
BarCharts.propTypes = {
    data: propTypes.array,
    chartWidth: propTypes.number
};
export default BarCharts;
