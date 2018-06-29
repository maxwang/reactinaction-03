import React, { Component } from "react";
import { render } from "react-dom";
import Secret from "./Secret";
import Counter from "./Counter";

class App extends React.Component {
    render() {
        return (
            <div>
                <Secret />
                <Counter incrementBy={1} />
            </div>
            
        );
    }
}

export default App;