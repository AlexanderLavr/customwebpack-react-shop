import { request } from '../../shere/request';

export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';


export const saveProducts = (products) => {
    return { type: SAVE_PRODUCTS, products }
}

export const getProducts = () => {
    return async (dispatch) => {
        const products = await request('/', 'GET')
        dispatch(saveProducts(products.data))
    }
}