const grocerylist = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action)
      return [
        ...state,
        {
          id: action.payload.id,
          item: action.payload.item,
          completed: false
        }
      ]
    case 'DELETE_ITEM':
      return [...state.filter((item) => item.id !== action.payload.id)]
    default:
      return state
  }
}

export default grocerylist
