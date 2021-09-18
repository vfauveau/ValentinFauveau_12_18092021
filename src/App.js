import "./App.css";
import NavHeader from "./Components/NavHeader";
import Sidebar from "./Components/Sidebar";
import PageContent from "./Components/PageContent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavHeader />
            </header>
            <main>
                <Sidebar />
                <PageContent></PageContent>
            </main>
        </div>
    );
}

export default App;
