const initialState = {
  goCart: []
}

const grocerylist = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        goCart: [
          ...state.goCart,
          {
            id: action.payload.id,
            item: action.payload.item,
            completed: false
          }
        ]
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        goCart: state.goCart.filter((item) => item.id !== action.payload.id)
      }
    case 'UPDATE_ITEM':

      return {
        ...state,
        goCart: state.goCart.map(item => console.log(item))
      }
    default:
      return state
  }
}

export default grocerylist
