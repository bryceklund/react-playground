import React, { Component } from 'react';

class CountrySelector extends Component {
    changeSelection(value) {
        if (value === "None") {
            this.props.changeHandler(null);
        } else {
            console.log(value)
            const country = this.props.countries.find(country => country.name === value);
            console.log(country)
            this.props.changeHandler(country);
        }
    }
    render() {
        return (
            <div className="country_selector">
                <form>
                    <label htmlFor="country">Select a country:          </label>
                    <select id="country" name="country" onChange={e => this.changeSelection(e.target.value)}>
                        <option value="None">Select one...</option>
                        {this.props.countries.map((country, i) => {
                            return <option value={country.name} key={i}>{country.name}</option>
                        })}
                    </select>
                </form>
            </div>
        );
    }
}

 CountrySelector.defaultProps = {
     countries: []
 }

export default CountrySelector;