export const addItem = (id, item, img) => ({
  type: 'ADD_ITEM',
  payload: {
    id,
    item,
    img
  }
})

export const deleteItem = (id) => ({
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
