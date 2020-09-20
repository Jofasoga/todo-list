import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
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
        this.fetchTasks = this.fetchTasks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.fetchTasks();
    }
    fetchTasks() {
        console.log("Fetching...");
        fetch("http://127.0.0.1:8000/task-list/")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    todoList: data,
                })
            );
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        console.log("Name:", name);
        console.log("Value:", value);
        this.setState({
            activeItem: {
                ...this.state.activeItem,
                title: value,
            },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("ITEM: ", this.state.activeItem);
        let url = "http://127.0.0.1:8000/task-create/";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(this.state.activeItem),
        })
            .then((response) => {
                this.fetchTasks();
                this.setState({});
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
    }

    render() {
        let tasks = this.state.todoList;
        return (
            <div className="container">
                <div id="task-container">
                    <div id="form-wrapper">
                        <form onSubmit={this.handleSubmit} id="form">
                            <div className="flex-wrapper">
                                <div style={{ flex: 6 }}>
                                    <input
                                        onChange={this.handleChange}
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
                    <div id="list-wrapper">
                        {tasks.map(function (task, index) {
                            return (
                                <div
                                    key={index}
                                    className="task-wrapper flex wrapper"
                                >
                                    <div style={{ flex: 7 }}>
                                        <span>{task.title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
