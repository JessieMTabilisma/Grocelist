import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Redux store
import { Provider, useSelector } from 'react-redux'
import store from './store'
// Firebase
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './services/firebase'
import { createFirestoreInstance } from 'redux-firestore'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableClaims: true
}

firebase.firestore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Auth...</div>
  return children
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.register()
