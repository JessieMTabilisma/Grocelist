import { combineReducers } from 'redux'
import grocerylist from './groceryList'
import cartlist from './cartlist'

export default combineReducers({ grocerylist, cartlist })
