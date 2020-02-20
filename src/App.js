import React, { Component } from 'react';
import './styles/index.scss';
import 'babel-polyfill';
import configStore from './redux/store';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/home/Home';
import Header from './components/header/Header';    

import Cart from './components/cart/Cart';


const store = configStore();


export default class App extends Component {
    state = {
        swich: false,
        countCart: 0,
        selectedProduct: []
    }
    setGlobalProps = (name, value) => {
        this.setState({ [name]: value }) 
    }
    render() {
        const { swich, selectedProduct, countCart } = this.state;
        return (
            <Provider store={store}>
                <Router>
                    <Route  
                        render = {(props) => <Header 
                        setGlobalProps={this.setGlobalProps}
                        countCart={countCart}
                        {...props} />} 
                    />
                    <Route 
                        exact path="/" 
                        render = {(props) => <Home 
                        selectedProduct={selectedProduct}
                        swich={swich}  
                        setGlobalProps={this.setGlobalProps}
                        {...props}/>} 
                    />
                    <Route path="/cart" 
                        render = {(props) => <Cart 
                        setGlobalProps={this.setGlobalProps}
                        {...props}
                    />} />
                </Router>
            </Provider>
        );
    }
}
