import React from "react";

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    todoInputChanged = e => {
        this.setState({ todo: e.target.value });
    }

    addTodoButtonClicked = () => {
        this.props.handleAddTodoButtonClicked(this.state.todo);
    }

    render() {
        return (
            <div className="row">
                <div className="col p-0">
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.todoInputChanged}
                        value={this.state.todo}
                    />
                </div>
                <div className="col-auto pl-2">
                    <button
                        onClick={this.addTodoButtonClicked}
                        className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        );
    }
}