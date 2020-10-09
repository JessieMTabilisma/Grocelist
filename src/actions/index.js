export const addItem = item => ({
  type: 'ADD_ITEM',
  payload: {
    item
  }
})

export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  payload: {
    id
  }
})

export const updateItem = (id, item) => ({
  type: 'UPDATE_ITEM',
  payload: {
    id,
    item,
    completed: false
  }
})

// Counter
export const incrementItem = id => ({
  type: 'INCREMENT',
  payload: { id }
})

export const decrementItem = id => ({
  type: 'DECREMENT',
  payload: { id }
})

// Auth
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
