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
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './services/firebase'
import { createFirestoreInstance } from 'redux-firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyAkui_k05CX87LG_aAie4g8cO0qniVCXI8',
//   authDomain: 'grocelist-85fd7.firebaseapp.com',
//   databaseURL: 'https://grocelist-85fd7.firebaseio.com',
//   projectId: 'grocelist-85fd7',
//   storageBucket: 'grocelist-85fd7.appspot.com',
//   messagingSenderId: '102374602116',
//   appId: '1:102374602116:web:de221f4563663389c8d9d1'
// }

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

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.register()
