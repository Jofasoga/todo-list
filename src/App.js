import React from "react";
import logo from "./logo.svg";
import todo from "./logo.svg";
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
            <div className="container">
                <div id="task-container">
                    <div id="form-wrapper">
                        <form id="form">
                            <div className="flex-wrapper">
                                <div style={{ flex: 6 }}>
                                    <input
                                        className="form-control"
                                        id="title"
                                        type="text"
                                        placeholder="Add task to the list"
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <input
                                        id="submit"
                                        className="btn btn-warning"
                                        type="submit"
                                        name="Add"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="list-wrapper"></div>
                </div>
            </div>
        );
    }
}
