//async actions !
// state = { loading: true, data:[], error:''}
//Fetch_user_request , Fetch_user_Success, Fetch_users_Failure
// reducer : Fetch_user_req , loading : true
// success -> loading: false, user data
//false-> loading fale 

const redux = require('redux')
const createStore = redux.createStore
//state
const intitalState = {
    loading : false,
    users : [],
    error: ''
}

const FETCH_USERS_REQUEST ='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE ='FETCH_USERS_FAILURE'

const fetchUsersRequest = () => { //action creator
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => { //action creator
    return {
        type: FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = (error) => { //action creator
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading : false,
                users : action.payload,
                error :''
            }
            case FETCH_USERS_FAILURE:
                return {
                    loading : false,
                    users : [],
                    error :action.payload
                }
    }
}

//redux store
const store = createStore(reducer)


