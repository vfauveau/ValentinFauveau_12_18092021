import { React} from "react";
import Sidebar from "../Components/Sidebar";
import PageContent from "../Components/PageContent";
import dataModelling from "../DataFormat";

function Userpage() {
    const data = dataModelling()
    return (
        <main>
            <Sidebar />
            <PageContent data={data} name={data[0].userInfos.firstName} keyData={data[0].keyData}></PageContent>
        </main>
    );
}
export default Userpage;
