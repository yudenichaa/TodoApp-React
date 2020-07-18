import React from "react";

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span style={{
                color: this.props.selected ? "black" : "blue",
                cursor: this.props.selected ? "default" : "pointer"
            }}
                onClick={this.props.onClick}
            >{this.props.children}</span>
        );
    }
}