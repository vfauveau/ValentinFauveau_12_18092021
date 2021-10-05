import Sidebar from "./Sidebar";
import "../Styles/PageContent.css";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import fetchData from "../Calls";

function Home () {
    const [userID, setstate] = useState(0)

    /** Set the userID value to the input value */  
    const handleChange = (event) => {
        setstate(event.target.value);
    };

    /** get the data after fetching, then store it at localstorage */
    const handleSubmit = async () => {
        let data = await fetchData(userID);
        localStorage.setItem("data", JSON.stringify(data));
    };

    return (
        <div className="App">
            <main>
                <Sidebar />
                <div className="content-main">
                    <form style={{ paddingTop: "50px" }} onSubmit={handleSubmit}>
                        <label style={{margin:"0 5px"}}>
                            Entrez votre numéro d'utilisateur
                            <input style={{margin:"0 5px"}} type="number" value={userID} onChange={handleChange} />
                        </label>
                        <Link onClick={handleSubmit} to={"/user/" + userID}>
                            <button type="submit">Entrez !</button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>
    );
}
export default Home