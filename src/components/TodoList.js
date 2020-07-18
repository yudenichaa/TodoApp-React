import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todos.map(todo => <Todo key={todo.id} handleTodoClick={() => this.props.handleTodoClick(todo.id)} todo={todo} />)
        return (
            <ul>
                {todos}
            </ul>
        );
    }
}