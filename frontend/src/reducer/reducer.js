import {
  TEST
} from '../action/ActionType';

var reducer = (state = false, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {
        test: action.test
      });
    default:
      return state === undefined ? [] : state;
  }
}

export default reducer;