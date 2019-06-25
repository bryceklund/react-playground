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
            .then(response => {
                if(!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response;
            })
            .then(response => response.json())
            .then(result => {
                const countries = Object.keys(result).map(key => result[key].item[0])
                console.log(countries)
                this.setState({
                    countries,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error:  err.message
                })
            })
    }
    render() {
        const error = this.state.error
            ? <div className="error">{this.state.error}</div>
            : '';
        const demon = this.state.selected
            ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
            : <div className={'demonym_placeholder'}>Select a country above</div>
        return (
            <div className="demonym_app">
                <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)} />
                {demon}
                {error}
            </div>
        );
    }
}

export default DemonymApp;