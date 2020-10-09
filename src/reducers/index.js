import { combineReducers } from 'redux'
import grocerylist from './groceryList'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({ grocerylist, firebase: firebaseReducer, firestore: firestoreReducer })
