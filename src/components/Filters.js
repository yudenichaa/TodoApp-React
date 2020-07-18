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
                    selected={this.props.selectedFilter == todoFilters.active}
                    onClick={() => this.props.onFilterClick(todoFilters.active)}>
                    Active
                </Filter>
                {", "}
                <Filter
                    selected={this.props.selectedFilter == todoFilters.completed}
                    onClick={() => this.props.onFilterClick(todoFilters.completed)}>
                    Completed
                </Filter>
                {", "}
                <Filter
                    selected={this.props.selectedFilter == todoFilters.all}
                    onClick={() => this.props.onFilterClick(todoFilters.all)}>
                    All
                </Filter>
            </p>
        );
    }
}