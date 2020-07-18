import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li style={{
                cursor: "pointer",
                textDecoration: this.props.todo.completed ? "line-through" : "none"
            }}
                onClick={this.props.handleTodoClick}
            >
                {this.props.todo.text}
            </li>
        );
    }
}