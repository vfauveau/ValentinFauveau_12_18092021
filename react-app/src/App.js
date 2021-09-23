import "./App.css";
import NavHeader from "./Components/NavHeader";
import Sidebar from "./Components/Sidebar";
import PageContent from "./Components/PageContent";
import { React, useState, useEffect } from "react";

const url = "http://localhost:3000/user/12";

function App() {
    const [data, dataSet] = useState(null);

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch(url)
          response = await response.json()
          dataSet(response)
        }
        fetchMyAPI()
      }, [dataSet])
    return (
        <div className="App">
            <header className="App-header">
                <NavHeader />
            </header>
            <main>
                <Sidebar />
                <PageContent name={data.data.userInfos.firstName}></PageContent>
            </main>
        </div>
    );
}

export default App;
