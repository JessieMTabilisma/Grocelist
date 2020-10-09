import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'

const initialState = {}

const middlewares = [
  reduxThunk.withExtraArgument(getFirebase)
]

export default createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(logger, ...middlewares)
))
