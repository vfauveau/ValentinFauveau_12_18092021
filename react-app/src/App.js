import "./App.css";
import NavHeader from "./Components/NavHeader";
import Sidebar from "./Components/Sidebar";
import PageContent from "./Components/PageContent";
import { React, useState, useEffect } from "react";


const url = "http://localhost:3000/user/12";

function App() {
    const [name,setName] = useState("")
    const [keyData, setKeyData] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setName(data.data.userInfos.firstName)
        setKeyData(data.data.keyData)
    }
    return (
        <div className="App">
            <header className="App-header">
                <NavHeader />
            </header>
            <main>
                <Sidebar />
                <PageContent keyData={keyData} name={name}></PageContent>
            </main>
        </div>
    );
}

export default App;
