//multiple reducers!- approach using multiple reducer
const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
// redux provide method to combine the reducers.
const combineReducers = redux.combineReducers

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

// const initialState = {
//     numofCakes : 10,
//     numOfIceCreams : 20
// }
const initialCakeState ={
    numofCakes:10
}
const initialIceCreamState = {
    numOfIceCreams: 20 
}



const cakereducer = (state= initialCakeState,action) =>{
    switch(action.type)
    {
        case BUY_CAKE : return{
            ...state,
            numofCakes: state.numofCakes -1
        }
        default: return state
    }
}
const icecreamreducer = (state= initialIceCreamState,action) =>{
    switch(action.type)
    {
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
        default: return state
    }
}


const rootReducer = combineReducers({ // use object to combine the reducers 
    cake: cakereducer,
    icecream : icecreamreducer

})

const store = createStore(rootReducer) /// holds the application state.
console.log('Initail state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()


