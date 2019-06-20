import React, { Component } from 'react';
import './DemonymApp.css';
import Demonym from './Demonym/Demonym';
import CountrySelector from './CountrySelector/CountrySelector';

class DemonymApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selected: null
        };
    }
    setSelected(selected) {
        this.setState({
            selected
        });
    }
    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
            .then(response => response.json())
            .then(result => {
                const countries = Object.keys(result).map(key => result[key].item[0])
                console.log(countries)
                this.setState({
                    countries
                })
            });
    }
    render() {
        const demon = this.state.selected
                        ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
                        : <div className={'demonym_placeholder'}>Select a country above</div>
        return (
            <div className="demonym_app">
                <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)} />
                {demon}
            </div>
        );
    }
}

export default DemonymApp;