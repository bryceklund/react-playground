import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AppLang from './lang-context/AppLang';

ReactDOM.render(
    <BrowserRouter>
        <AppLang />
    </BrowserRouter>, document.getElementById('root'));
