let indexItem = 0

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: {
    id: indexItem++,
    item
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
    item
  }
})
