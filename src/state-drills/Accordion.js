import React, { Component } from 'react';

class Accordion extends Component {
    static defaultProps = {
        sections: [{}]
    }
    state = {
        currentIndex: null
    }
    handleButtonClick(index) {
        this.setState({ currentIndex: index })
        console.log(index)
    }
    renderStuff() {
        return (
            this.props.sections.title && this.props.sections.map((section, index) => 
            <li key={index}>
                { <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button> }
                { this.state.currentIndex === index && (<p>{section.content}</p>) }
            </li>))
    }
    render() {
        return (
            <ul>
                {this.renderStuff()}
            </ul>
       );
    }
}

export default Accordion;