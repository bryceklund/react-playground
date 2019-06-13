import React, { Component } from 'react';

class Bomb extends Component {
    state = {
        count = 0
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Bomb;