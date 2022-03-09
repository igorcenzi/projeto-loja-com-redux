import { CART_ADD_PRODUCT} from "./actionTypes"

const initialState = JSON.parse(localStorage.getItem("@cart")) || []

const cartReducer = (state = initialState, action) => {
 
  switch(action.type){

    case CART_ADD_PRODUCT:
      return action.product

      default:
        return state
  }
}

export default cartReducer