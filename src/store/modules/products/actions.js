import { GET_PRODUCTS } from "./actionTypes"

const productList = (product) => ({
  type: GET_PRODUCTS,
  product
})

export default productList