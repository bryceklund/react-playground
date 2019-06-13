import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        who: "world"
    }
    handleButtonClick = (e) => {
        const id = e.target.id
        if (id == 1) {
            this.setState({ who: "world" })
        } else if  (id == 2) {
            this.setState({ who: "friend" })
        } else if  (id == 3) {
            this.setState({ who: "React" })
        }
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button id={1} onClick={this.handleButtonClick}>World</button>
                <button id={2} onClick={this.handleButtonClick}>Friend</button>
                <button id={3} onClick={this.handleButtonClick}>React</button>
            </div>
        );
    }
}

export default HelloWorld;