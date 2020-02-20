import { request } from '../../common/request';

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

export const setFavorite = (id) => {
    return async (dispatch) => {
        await request(`/editFavorite/${id}`, 'PUT')
        await dispatch(getProducts())
    }
}