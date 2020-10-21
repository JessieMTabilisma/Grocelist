export const incrementItem = id => ({
  type: 'INCREMENT',
  payload: { id }
})

export const decrementItem = id => ({
  type: 'DECREMENT',
  payload: { id }
})
