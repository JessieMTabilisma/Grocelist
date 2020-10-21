export const signupSuccess = (credentials) => ({
  type: 'SIGNUP_SUCCESS',
  payload: { credentials }
})

export const signupError = (error) => ({
  type: 'SIGNUP_ERROR',
  payload: { error }
})

export const signinSuccess = (credentials) => ({
  type: 'SIGNIN_SUCCESS',
  payload: { credentials }
})

export const signinError = (error) => ({
  type: 'SIGNIN_ERROR',
  payload: { error }
})

export const signoutSuccess = () => ({
  type: 'SIGNOUT_SUCCESS',
  payload: 'succesfully logout'
})

export const signoutError = (error) => ({
  type: 'SIGNOUT_ERROR',
  payload: {
    error
  }
})
