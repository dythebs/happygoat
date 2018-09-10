import {
  TEST,CART
} from '../action/ActionType';

var reducer = (state = false, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {
        test: action.test
      });
    case CART:
      return Object.assign({},state,{
        carts:action.carts
      })
    default:
      return state === undefined ? [] : state;
  }
}

export default reducer;