import Sidebar from "./Sidebar";
import "../Styles/PageContent.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import unformattedData from "../Calls";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, data: [{}] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit() {
        let data = await unformattedData(this.state.value)
        localStorage.setItem("data", JSON.stringify(data))
    }

    render() {
        return (
            <div className="App">
                <main>
                    <Sidebar />
                    <div className="content-main">
                        <form style={{ paddingTop: "50px" }} onSubmit={this.handleSubmit}>
                            <label>
                                Entrez votre numéro d'utilisateur
                                <input type="number" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <Link onClick={this.handleSubmit} to={"/user/" + this.state.value}>
                                <button type="submit">Entrez !</button>
                            </Link>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
