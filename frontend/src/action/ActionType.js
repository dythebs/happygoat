
export const TEST = 'TEST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DEL_FROM_CART = 'DEL_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addproduct = item => ({
  type:ADD_TO_CART,
  item:item
})

export const delproduct = title => ({
  type:DEL_FROM_CART,
  title:title
})

export const clear_cart = () => ({
  type:CLEAR_CART
})