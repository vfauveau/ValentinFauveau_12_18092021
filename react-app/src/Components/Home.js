import Sidebar from "./Sidebar";
import "../Styles/PageContent.css";
import React, { useState } from "react";
import fetchData from "../Calls";
import dataModelling from "../DataFormat";

function Home() {
    const [userID, setstate] = useState(0);

    /** Set the userID value to the input value */
    const handleChange = (event) => {
        setstate(event.target.value);
    };

    /** get the data after fetching, then store it at localstorage */
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = await fetchData(userID);
        dataModelling(data)
    };

    return (
        <div className="App">
            <main>
                <Sidebar />
                <div className="content-main">
                    <form style={{ paddingTop: "50px" }}>
                        <label style={{ margin: "0 5px" }}>
                            Entrez votre numéro d'utilisateur
                            <input style={{ margin: "0 5px" }} type="number" value={userID} onChange={handleChange} />
                        </label>
                        <button onClick={handleSubmit}>test</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
export default Home;
