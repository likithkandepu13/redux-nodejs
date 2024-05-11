//middleware - logger
//used to check the total log how its been getting executed, we can make this logs in the browser

const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const logger= reduxLogger.createLogger() //middleware
const applymiddleware = redux.applyMiddleware
//applymiddle ware to use middleware

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"


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

const store = createStore(rootReducer,applymiddleware(logger)) /// holds the application state.
console.log('Initail state',store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()


