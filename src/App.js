import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input id="input" placeholder="Add to the list" />
            </header>
        </div>
    );
}

export default App;
