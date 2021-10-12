import React from "react";

function BarChartLegend() {
    return (
        <div className="barChart-legend-wrapper" style={{ display: "flex", justifyContent: "space-between", padding:"20px 32px" }}>
            <h5 className="barChart-title">Activité Quotidienne</h5>
            <div className="barChart-legend">
                <div> <div className="circle black"></div> <strong style={{marginRight:"5px", color:"#74798C"}}>Poids (kg)</strong></div>
                <div> <div className="circle red"></div><strong style={{marginLeft:"5px", color:"#74798C"}}>Calories Brûlées (kCal)</strong></div>
            </div>
        </div>
    );
}

export default BarChartLegend;
