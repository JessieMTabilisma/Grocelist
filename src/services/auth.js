import {
  signupSuccess as SIGNUP_SUCCESS,
  signupError as SIGNUP_ERROR,
  signinSuccess as SIGNIN_SUCCESS,
  signinError as SIGNIN_ERROR,
  signoutSuccess as SIGNOUT_SUCCESS,
  signoutError as SIGNOUT_ERROR
} from '../actions'

import firebase from './firebase'

export const signup = (email, password, callback) => async dispatch => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebase.auth().onAuthStateChanged(user => {
          user.sendEmailVerification()
        })
      })
      .then(dataAfterEmail => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            dispatch(SIGNUP_SUCCESS)
            callback()
          } else {
            dispatch(SIGNUP_ERROR)
          }
        })
      })
      .catch(() => {
        dispatch(SIGNUP_ERROR)
      })
  } catch (err) {
    dispatch(SIGNUP_ERROR)
  }
}

export const signin = (email, password, callback) => async dispatch => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        if (data.user.emailVerified) {
          console.log('IF', data.user.emailVerified)
          dispatch(SIGNIN_SUCCESS)
          callback()
        } else {
          console.log('ELSE', data.user.emailVerified)
          dispatch(SIGNIN_ERROR)
          console.log('here')
        }
        console.log(data.user.emailVerified)
      })
      .catch(() => {
        dispatch(SIGNIN_ERROR)
      })
  } catch (err) {
    dispatch(SIGNIN_ERROR)
  }
}

export const signout = (callback) => async dispatch => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(SIGNOUT_SUCCESS)
        callback()
      }).catch(() => {
        dispatch(SIGNOUT_ERROR)
      })
  } catch (err) {
    dispatch(SIGNOUT_ERROR)
  }
}
