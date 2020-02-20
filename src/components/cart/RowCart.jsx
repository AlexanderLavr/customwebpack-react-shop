import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { addQuantityProduct, totalCartCount, removeQuantityProduct, deleteProduct } from '../../common/cart';
import store from '../../common/localstor';


export default class RowCart extends Component {
    countProduct() {
        const { data: { quantity, price }} = this.props;
        return price * quantity
    }
    addQuantity( ) {
        const [_id, localArr] = this.getProps();
        addQuantityProduct(_id, localArr)
        this.totalCount()
    }
    removeQuantity() {
        const [_id, localArr] = this.getProps();
        removeQuantityProduct(_id, localArr)
        this.totalCount()
    }
    deleteProduct() {
        const [_id, localArr] = this.getProps();
        deleteProduct(_id, localArr)
        this.totalCount()
    }
    getProps (){
        const { data: { _id } } = this.props;
        const localArr = store.get('testShop');
        return [_id, localArr]
    }
    totalCount = () => {
        const { setGlobalProps } = this.props;
        const total = totalCartCount();
        setGlobalProps('countCart', total)
    }
    render() {
        const { data: { image, price, quantity, amount }} = this.props;
        return (
            <div className="cartRowContainer">
                <Button variant="contained" color="primary" onClick={() => this.deleteProduct()}><DeleteSweepIcon /></Button>
                <CardMedia
                    className="cartRowImage"
                    component="div"
                    image={image}
                />
                <Button variant="contained" color="primary" onClick={() => this.addQuantity()}><AddCircleOutlineIcon /></Button>
                <span className="cartRowInfo">{price}грн. x {quantity}. В наличии: {amount} шт.</span>
                <Button variant="contained" color="primary" onClick={() => this.removeQuantity()}><RemoveCircleOutlineIcon /></Button>
                <span className="cartRowInfo">{this.countProduct()} грн.</span>
            </div>
        );
    }
    componentDidMount() {
        this.totalCount()
    }
}