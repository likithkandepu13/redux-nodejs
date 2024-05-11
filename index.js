// action
const BUY_CAKE = "BUY_CAKE"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
// reducer:
// (previousState, action) => newState
const initialState = {
    numofCakes : 10
}

//reducer function 
const reducer = (state= initialState,action) =>{
    switch(action.type)
    {
        case BUY_CAKE : return{
            ...state,// spread operator is used to unchange of the rest of the properties out of action
            numofCakes: state.numofCakes -1
        }
        default: return state
    }
}