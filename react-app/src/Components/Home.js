import Sidebar from "./Sidebar";
import "../Styles/PageContent.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
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
                            <Link to={"/user/" + this.state.value}>
                                <button type="submit">Entrez !</button>
                            </Link>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
