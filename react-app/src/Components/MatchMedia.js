import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "../Styles/PageContent.css";
import Content from "./Content";

/** PageContent component, called when a userID is typed & valid */
const MatchMedia = (props) => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(max-width: 1300px)");
        setIsNarrowScreen(mediaWatcher.matches);

        //watch for updates
        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }
        mediaWatcher.addEventListener("change", updateIsNarrowScreen);

        // clean up after ourselves
        return function cleanup() {
            mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
        };
    }, []);

    if (isNarrowScreen) {
        return <Content name={props.name} linechart={170} smallChartWidth={200} chartWidth={630} keyData={props.keyData} data={props.data}/>
    } else {
        return <Content  name={props.name} linechart={200} smallChartWidth={263} chartWidth={835} keyData={props.keyData} data={props.data}/>
    }
};
MatchMedia.propTypes = {
    name:propTypes.string,
    data:propTypes.array,
    keyData:propTypes.object
}
export default MatchMedia;
