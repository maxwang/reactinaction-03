import React, { Component } from "react";
import { render } from "react-dom";

class Secret extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mark',
            colors: {
                favorite: ''
            }
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState(() => ({
            colors: {
                favorite: 'blue'
            }
        }));
    }

    render() {
        return (
            <div>
                <h1> My name is {this.state.name}, and my favorite color is {this.state.colors.favorite} </h1>
                <button onClick={this.onButtonClick}>show the color!</button>
            </div>
        );
    }
}

export default Secret;