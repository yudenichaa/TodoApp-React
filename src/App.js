import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import todoFilters from "./TodoFilters";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.id = 0;
        this.state = {
            todos: [],
            selectedFilter: todoFilters.all,
        }
    }

    handleAddTodo = (todo) => {
        this.setState(state => ({
            todos: [...state.todos, { text: todo, completed: false, id: this.id++ }]
        }));
    }

    handleTodoClick = (todoId) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id == todoId) return { ...todo, completed: !todo.completed };
                else return todo;
            })
        })
    }

    handleSelectFilter = (filter) => {
        this.setState({
            selectedFilter: filter
        });
    }

    getVisibleTodos = () => {
        switch (this.state.selectedFilter) {
            case todoFilters.active:
                return this.state.todos.filter(todo => !todo.completed);
            case todoFilters.completed:
                return this.state.todos.filter(todo => todo.completed);
            case todoFilters.all:
            default:
                return this.state.todos;
        }
    }

    render() {
        const visibleTodos = this.getVisibleTodos();
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <AddTodo handleAddTodoButtonClicked={this.handleAddTodo} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <TodoList
                            todos={visibleTodos}
                            handleTodoClick={this.handleTodoClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Filters
                            selectedFilter={this.state.selectedFilter}
                            onFilterClick={this.handleSelectFilter} />
                    </div>
                </div>
            </div>
        );
    }
}