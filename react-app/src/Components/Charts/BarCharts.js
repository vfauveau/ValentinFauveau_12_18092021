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
    return (
        <div width={835} height={320}>
            <BarChartLegend />
            <BarChart width={835} height={250} data={props.data[1].sessions}>
                <CartesianGrid vertical={false} strokeDasharray="4 4" />
                <XAxis style={{ paddingTop: "10px" }} tickLine={false} />
                <YAxis contentStyle={{marginLeft:"20px"}} scale={"linear"} yAxisId={0} axisLine={false} tickLine={false} orientation={"right"} type="number" domain={["dataMin-1", "dataMax+3"]} dataKey="kilogram" />
                <YAxis domain={["0", "dataMax"]} scale={"linear"} yAxisId={1} axisLine={false} tickLine={false} tick={false} orientation={"left"} type="number" dataKey="calories" />
                <Tooltip
                    viewBox={{width:"39px", height:"63px"}}
                    itemStyle={{ width: "39px", height: "63px", backgroundColor: "#E60000", color: "white", fontSize:"10px" }}
                    contentStyle={{ backgroundColor: "#E60000", color: "white", textAlign:"center" }}
                    separator={""}
                    
                />
                <Bar name="Kg" barSize={7} dataKey="kilogram" fill="#282D30" radius={[3.5, 3.5, 0, 0]} />
                <Bar name="Kcal" barSize={7} dataKey="calories" yAxisId={1} fill="#E60000" radius={[3.5, 3.5, 0, 0]} />
            </BarChart>
        </div>
    );
};
BarCharts.propTypes = {
    data: propTypes.array,
};
export default BarCharts;
