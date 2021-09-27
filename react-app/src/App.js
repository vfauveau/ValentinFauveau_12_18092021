import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import UserPage from "./Components/Userpage";
import NavHeader from "./Components/NavHeader"
import ErrorPage from "./Components/ErrorPage"

function App() {
    return (
        <Router>
            <header className="App-header">
                <NavHeader />
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user/:id" component={UserPage} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    );
}

export default App;
