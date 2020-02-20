import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, setFavorite } from '../../redux/home/home.actions';
import store from '../../common/localstor';
import MediaCard from './Card';
import Spinner from '../shere/Spinner';
import EmptyPage from '../shere/Empty.Page';


class Home extends Component {
    render() {
        const { products } = this.props;
        const productList = this.filterProduct();

        if( !products.length ){
            return <Spinner />
        }

        if( !productList.length ) {
            return <EmptyPage />
        }
        
        if( products.length ){
            return (
                <div className="homeContainer">
                    {productList.map(el => {
                        return (
                            <MediaCard data={el} {...this.props} key={el._id}/>
                        )
                    })}
                </div>
            );
        }
    }
    componentDidMount() {
        const { getProducts } = this.props;
        getProducts()
        this.cartValue();
    }
    cartValue() {
        return store.checkStore('testShop')
    }
    filterProduct() {
        const { products, swich, selectedProduct } = this.props;
        if(swich) {
            return products.filter(el => el.isFavorite)
        }
        if(selectedProduct.length) {
            return this.filterSelectedProducts();
        }
        return products
    }
    filterSelectedProducts() { //filter selected products
        const { products, selectedProduct: selectedTypeProduct } = this.props;
        let selectedProducts = [];
        selectedTypeProduct.map(type => {
          let typeProducts = products.filter(product => product.type === type)
          selectedProducts = selectedProducts.concat(typeProducts)
        })
        return selectedProducts
    }
}

const mapStateToProps = (state) => ({
    products: state.home.products
})

export default connect(
    mapStateToProps, 
    { getProducts, setFavorite}
)(Home) 