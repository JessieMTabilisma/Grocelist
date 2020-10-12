import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Redux store
import { Provider } from 'react-redux'
import store from './store'
// Firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import 'firebase-admin'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './services/firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
  // enableClaims: true // Get custom claims along with the profile
}
// firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  console.log(auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>
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
