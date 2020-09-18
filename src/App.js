import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container-id">
                    <center>
                        <input id="input-id" placeholder="Add to the list" />
                    </center>
                    <Button className="btn">ADD</Button>
                </div>
            </header>
        </div>
    );
}

export default App;
