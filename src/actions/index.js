import uuid from 'uuid'

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: {
    id: uuid(),
    item
  }
})

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  payload: {
    id
  }
})