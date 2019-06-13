import React, { Component } from 'react';

class RouletteGun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            status: null
        }
    }
    getRandom = () => {
        this.setState({ chamber: Math.ceil(Math.random() * 8) })
        console.log(this.state.chamber)
    }
    handleButtonClick = () => {
        this.setState({ spinningTheChamber: true })
        setTimeout(this.getRandom(), 2000)
        if (this.state.spinningTheChamber) {
            this.setState({ status: "spinning the chamber and pulling the trigger! ..." })
        } else if (this.state.chamber === this.props.bulletChamber) {
            this.setState({ status: "BANG!!!" })
        } else if (this.state.chamber != this.props.bulletChamber) {
            this.setState({ status: "you're safe!"})
        }
        
    }
    render() {
        return (
            <div>
                <p>{this.state.status}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        );
    }
}

export default RouletteGun;