import sampleProduct from './sample'
/* eslint-disable no-case-declarations */
const initialState = {
  goCart: [],
  inventory: sampleProduct
}

const grocerylist = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action.payload)
      return {
        ...state,
        goCart: [
          ...state.goCart,
          {
            id: action.payload.id
          }
        ]
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        goCart: state.goCart.filter((item) => item.id !== action.payload.id)
      }
    case 'UPDATE_ITEM':
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
