import React from 'react';
import './styles/index.scss';
import 'babel-polyfill';
import configStore from './redux/store';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home'
import Main from './components/Main'

const store = configStore();

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={ Home } />
                <Route path="/main" component={ Main } />
            </Router>
        </Provider>
    );
}

export default App;