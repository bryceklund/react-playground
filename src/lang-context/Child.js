import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
    render() {
        return (
            <main role='main' className="Child">
                <GrandChild />
            </main>
        );
    }
}

export default Child;