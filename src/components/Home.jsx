import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../redux/home/home.actions';


class Home extends Component {
    render() {
        const { products } = this.props;
        return (
            <div>
                {products.map(el => {
                    return (
                        <img style={{display: 'block', margin: '20px', width: '200px', height: '200px'}} key={el._id} src={el.image} />
                    )
                })}
            </div>
        );
    }
    componentDidMount(){
        const { getProducts } = this.props;
        getProducts()
    }

}

const mapStateToProps = (state) => ({
    products: state.home.products
})

export default connect(
    mapStateToProps, 
    { getProducts }
)(Home)