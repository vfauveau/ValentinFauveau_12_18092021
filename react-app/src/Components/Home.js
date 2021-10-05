import Sidebar from "./Sidebar";
import "../Styles/PageContent.css";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import unformattedData from "../Calls";

function Home () {
    const [state, setstate] = useState(0)

    /** Set the state value to the input value */  
    const handleChange = (event) => {
        setstate(event.target.value);
    };

    /** get the data after fetching, then store it at localstorage */
    const handleSubmit = async () => {
        let data = await unformattedData(state);
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
                            <input style={{margin:"0 5px"}} type="number" value={state} onChange={handleChange} />
                        </label>
                        <Link onClick={handleSubmit} to={"/user/" + state}>
                            <button type="submit">Entrez !</button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>
    );
}
export default Home