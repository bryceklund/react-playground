import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';


class GreatGrandChild extends Component {
    render() {
        const copy = languageSpecificCopy[LanguageContext._currentValue.lang] || {}
        console.log(languageSpecificCopy)
        console.log(LanguageContext._currentValue.lang)
        return (
            <section>
                <h2>
                    {copy.title}
                </h2>
                <p>
                    {copy.body}
                </p>
                <button onClick={() => console.log(this.context)}>
                    Klingon{' '}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
            </section>
        );
    }
}

export default GreatGrandChild;