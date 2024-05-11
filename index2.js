//multiple reducers!- approach using one reducer
const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
function buyicecream() {
    return {
        type : BUY_ICECREAM,
        info : 'First Redux Action'
    }
}

const initialState = {
    numofCakes : 10,
    numOfIceCreams : 20
}


const reducer = (state= initialState,action) =>{
    switch(action.type)
    {
        case BUY_CAKE : return{
            ...state,
            numofCakes: state.numofCakes -1
        }
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
        default: return state
    }
}



const store = createStore(reducer) /// holds the application state.
console.log('Initail state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()


