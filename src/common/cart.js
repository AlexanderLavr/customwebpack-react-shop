import store from './localstor';

export const totalCartCount = () => {
    let count = 0;
    const localArr = store.get('testShop');
    localArr.map(el => {
        count += el.quantity; 
    })
    return count
}

export const endPrice = () => {
    let count = 0;
    const localArr = store.get('testShop');
    localArr.map(el => {
        count += el.quantity * el.price; 
    })
    return count
}


export const matchProduct = (_id, localArr) => {
    let match = false;
    for(let i of localArr) {
        if(i._id === _id) {
            match = true;
            break
        }
    }
    return match
}


export const addQuantityProduct = (_id, localArr) => {
    localArr.map(el => {
        if(el._id === _id) {
            if(el.amount === el.quantity) {
                return
            }
            el.quantity++
        }
    })
    store.set('testShop', localArr)
}
export const removeQuantityProduct = (_id, localArr) => {
    localArr.map(el => {
        if(el._id === _id) {
            if(el.quantity === 1) {
                return
            }
            el.quantity--
        }
    })
    store.set('testShop', localArr)
}

export const deleteProduct = (_id, localArr) => {
    if(!localArr.length) {
        return
    }
    localArr.map((el, ind) => {
        if(el._id === _id) {
            localArr.splice(ind, 1)
        }
    })
    store.set('testShop', localArr)
}
