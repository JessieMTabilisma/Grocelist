import sampleProduct from './sample'

const initialState = {
  goCart: [],
  inventory: sampleProduct
}

const grocerylist = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        goCart: [
          ...state.goCart,
          action.payload.item
        ],
        inventory: [
          ...state.inventory.map(item => item.id === action.payload.item.id ? { ...item, selected: true } : item)
        ]
      }
    case 'INCREMENT':
      return {
        ...state,
        goCart: state.goCart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
    case 'DECREMENT':
      return {
        ...state,
        goCart: state.goCart.map(item =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity !== 1 ? item.quantity - 1 : 1
            }
            : item
        )
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        goCart: state.goCart.filter((item) => item.id !== action.payload.id)
      }
    case 'UPDATE_ITEM':
      // eslint-disable-next-line no-case-declarations
      const data = action.payload
      return {
        ...state,
        goCart: state.goCart.map(item => item.id === data.id ? data : item)
      }
    default:
      return state
  }
}

export default grocerylist
