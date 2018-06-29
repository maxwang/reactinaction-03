import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    static propTypes = {
        incrementBy: PropTypes.number,
        onIncrement: PropTypes.func.isRequired //#B
      };

    static defaultProps = {
        incrementBy: 1
    };

    onButtonClick() {
        this.setState(function(prevState, props) {
            return { count: prevState.count + props.incrementBy };
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