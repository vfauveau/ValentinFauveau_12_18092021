import { React } from "react";
import Sidebar from "../Components/Sidebar";
import PageContent from "../Components/PageContent";
function Userpage() {
    var data = JSON.parse(localStorage.getItem("data"))
    var name = data[0].userInfos.firstName
    var keyData = data[0].keyData


    return (
        <main>
            <Sidebar />
            <PageContent data={data} name={name} keyData={keyData}></PageContent>
        </main>
    );
}
export default Userpage;
