
export const TEST = 'TEST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DEL_FROM_CART = 'DEL_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_LOC = 'SET_LOC';

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

export const setToken = token => ({
  type:SET_TOKEN,
  token:token
})

export const setProgress = progress => ({
  type: SET_PROGRESS,
  progress:progress
})

export const setLoc = loc => ({
  type: SET_LOC,
  loc:loc
})