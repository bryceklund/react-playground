import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    static defaultProps = {
        step: 1
    }
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState({
            count: this.state.count + this.props.step
        })
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <p>The current count is {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Increment
                </button>
            </div>
        );
    }
}

export default Counter;