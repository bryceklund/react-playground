import React, { Component } from 'react';

class Bomb extends Component {
    state = {
        count: 0,
        tiktok: "tick"
    }
    handleButtonClick = () => {
        this.setState({count: 0})
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 })
            if (this.state.count > 8) {
                this.setState({tiktok: "BOOM!"})
            } else {
                if (this.state.count % 2 === 0) {
                    this.setState({tiktok: "tick"})
                } else {
                    this.setState({tiktok: "tock"})
                }
            }
        }, 1000)
    }


    render() {
        return (
            <div>
                <p>{this.state.tiktok}</p>
                <button onClick={this.handleButtonClick}>reset</button>
            </div>
        );
    }
}

export default Bomb;