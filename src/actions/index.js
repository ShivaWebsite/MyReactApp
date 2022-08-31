export const increment=()=>{
    return{
        type:'INCREMENT'
    };
}

export const decrement=()=>{
    return{
        type:'DECREMENT'
    };
}

export const signout=()=>{
    return{
        type:'SIGN_IN'
    };
}
export const addNewItem=(item)=>{
    return{
        type:'ADD_ITEM',
        payload:item
    };
}