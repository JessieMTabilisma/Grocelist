import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAkui_k05CX87LG_aAie4g8cO0qniVCXI8',
  authDomain: 'grocelist-85fd7.firebaseapp.com',
  databaseURL: 'https://grocelist-85fd7.firebaseio.com',
  projectId: 'grocelist-85fd7',
  storageBucket: 'grocelist-85fd7.appspot.com',
  messagingSenderId: '102374602116',
  appId: '1:102374602116:web:de221f4563663389c8d9d1'
})

export default firebaseConfig
