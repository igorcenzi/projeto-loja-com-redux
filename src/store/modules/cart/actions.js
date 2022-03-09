import { CART_ADD_PRODUCT} from "./actionTypes";


export const refreshCart = (product) => ({
  type: CART_ADD_PRODUCT,
  product
})