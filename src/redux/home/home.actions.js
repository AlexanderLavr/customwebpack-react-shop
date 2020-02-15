export const EXAMPLE = 'EXAMPLE';


export const getExample = () => {
    return { type: EXAMPLE }
}

export const doSomthing = () => {
    return async (dispatch) => {
        dispatch(getExample())
    }
}