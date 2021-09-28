import { useEffect, useState, React } from "react";
import Sidebar from "../Components/Sidebar";
import PageContent from "../Components/PageContent";
import propTypes from "prop-types"

function Userpage(props) {
    const [name, setName] = useState("");
    const [keyData, setKeyData] = useState([]);
    // conditionnal render to set up
    const url = "http://localhost:3000/user/" + props.match.params.id;

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setName(data.data.userInfos.firstName);
        setKeyData(data.data.keyData);
    };
    useEffect(() => {
        loadData();
    });

    return (
        <main>
            <Sidebar />
            <PageContent id={props.match.params.id.toString()} keyData={keyData} name={name}></PageContent>
        </main>
    );
}
Userpage.propTypes = {
    id: propTypes.string,
    keyData: propTypes.array,
    name: propTypes.string
}
export default Userpage;
