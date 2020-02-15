import * as type from './home.actions';

const initialState = {
    example: 'example'

}

export function homeReducer(state = initialState, action){
    switch (action.type){
       case type.EXAMPLE:
            return {
                ...state
            }
        default:
          return state;
    }
} 