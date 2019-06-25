import React, { Component } from 'react';
import GreatGrandChild from './GreatGrandChild';

class GrandChild extends Component {
    render() {
        return (
            <div className='GrandChild'>
                <GreatGrandChild />
            </div>
        );
    }
}

export default GrandChild;