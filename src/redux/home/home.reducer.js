import * as type from './home.actions';


const initialState = {
    products: [],
    example: 'example'

}

export function homeReducer(state = initialState, action){
    switch (action.type){
       case type.SAVE_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
          return state;
    }
} 