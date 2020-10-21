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
