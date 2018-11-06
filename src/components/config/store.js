import {createStore,combineReducers,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import memberReducer from '../reducers/members' 
import appReducer from '../reducers/app' 


const reducers = combineReducers({
    members : memberReducer,
    app :appReducer
})

const middleware = applyMiddleware(logger,thunk)

export default createStore (reducers,middleware)