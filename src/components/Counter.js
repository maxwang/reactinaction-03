import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Counter extends React.Component {
    static propTypes: {
        incrementBy: PropTypes.number,
        onIncrement: PropTypes.func.isRequired
    };

    static defaultProps: {
        incrementBy: 1
    };
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState(function(prevState, props) {
            return { count: prevState + props.incrementBy };
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.onButtonClick}>++</button>
            </div>
        );
    }
}

export default Counter;