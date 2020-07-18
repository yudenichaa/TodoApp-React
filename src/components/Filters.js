import React from "react";
import Filter from "./Filter"
import todoFilters from "../TodoFilters";

export default class Filters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                <Filter
                    filter={todoFilters.active}
                    selected={this.props.selectedFilter == todoFilters.active}
                    onClick={() => this.props.onFilterClick(todoFilters.active)}
                />
                {", "}
                <Filter
                    filter={todoFilters.completed}
                    selected={this.props.selectedFilter == todoFilters.completed}
                    onClick={() => this.props.onFilterClick(todoFilters.completed)} />
                {", "}
                <Filter
                    filter={todoFilters.all}
                    selected={this.props.selectedFilter == todoFilters.all}
                    onClick={() => this.props.onFilterClick(todoFilters.all)} />
            </p>
        );
    }
}