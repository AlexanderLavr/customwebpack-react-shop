import store from '../common/localstor';
import { matchProduct, addQuantityProduct } from '../common/cart';

const addNewProduct = (data, localArr) => {
    const newProduct = {
        ...data,
        quantity: 1
    }
    localArr.push(newProduct)
    store.set('testShop', localArr)
} 

export const addToCart = (data) => {
    const { _id } = data;
    const localArr = store.get('testShop');
   
    if(!localArr.length) {
        addNewProduct(data, localArr)
    }else{
        const match = matchProduct(_id, localArr);
        if(match){
            addQuantityProduct(_id, localArr)
        }else{
            addNewProduct(data, localArr)
        }
    }
} 
