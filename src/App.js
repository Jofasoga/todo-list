import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

export function add() {
    console.log("button clicked");
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            activeItem: {
                id: null,
                title: "",
                completed: false,
            },
            editing: false,
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <center>
                        {" "}
                        <img src={logo} className="App-logo" alt="logo" />
                    </center>
                </header>
                <div className="container-id">
                    <form
                        className="form"
                        action="http://localhost:8000/list/"
                        method="POST"
                    >
                        <center>
                            <input
                                type="search"
                                id="input-id"
                                placeholder="Add to the list"
                            />
                        </center>
                    </form>
                    <input
                        type="submit"
                        value="ADD"
                        id="btn"
                        onClick={() => add()}
                    />
                </div>
            </div>
        );
    }
}
