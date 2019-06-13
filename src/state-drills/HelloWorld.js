import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        who: "world"
    }
    handleButtonClick = (word) => {
        if (word === 1) {
            this.setState({ who: "world" });
        } else if (word === 2) {
            this.setState({ who: "friend" });
        } else if (word === 3) {
            this.setState({ who: "React" });
        }
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleButtonClick(1)}>World</button>
                <button onClick={this.handleButtonClick(2)}>Friend</button>
                <button onClick={this.handleButtonClick(2)}>React</button>
            </div>
        );
    }
}

export default HelloWorld;