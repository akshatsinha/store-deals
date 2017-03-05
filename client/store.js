import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import signupReducer from './reducers/signupReducer'
import loginReducer from './reducers/loginReducer'

const store = createStore(
    combineReducers({
        signupReducer,
        loginReducer
    }),
    {},
    applyMiddleware(thunk, logger())
)


export default store
