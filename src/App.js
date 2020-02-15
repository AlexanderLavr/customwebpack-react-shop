import React from 'react';
import './styles/index.scss';
import configStore from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home'


const store = configStore();

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={ Home } />
            </Router>
        </Provider>
    );
}

export default App;