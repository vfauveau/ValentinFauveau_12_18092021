import { React } from "react";
import Sidebar from "../Components/Sidebar";
import MatchMedia from "../Components/MatchMedia";


/**
 * Userpage component
 * @returns {any}
 */
function Userpage() {
    var data = JSON.parse(localStorage.getItem("data"))
    var name = data[0].userInfos.firstName
    var keyData = data[0].keyData


    return (
        <main>
            <Sidebar />
            <MatchMedia data={data} name={name} keyData={keyData}></MatchMedia>
        </main>
    );
}
export default Userpage;
