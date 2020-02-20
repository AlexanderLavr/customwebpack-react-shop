import React, { Component } from 'react';
import store from '../../common/localstor';
import EmptyPage from '../shere/Empty.Page';
import RowCart from './RowCart';
import { endPrice } from '../../common/cart';
 

export default class Cart extends Component {
    render() {
        let cartValue = store.get('testShop');
        if(!cartValue.length) {
            return <EmptyPage />
        }
        return (
            <div className="cartContainer">
                <h2>Total price: {endPrice()}</h2>
                {cartValue.map(el => {
                    return <RowCart data={el} key={el._id} {...this.props}/>
                })}
            </div>
        );
    }
}