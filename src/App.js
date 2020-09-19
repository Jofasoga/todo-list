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
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="container-id">
                        <center>
                            <input
                                id="input-id"
                                placeholder="Add to the list"
                            />
                        </center>
                        <Button className="btn" onClick={() => add()}>
                            ADD
                        </Button>
                    </div>
                </header>
            </div>
        );
    }
}
