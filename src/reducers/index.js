import { combineReducers } from 'redux';
import { TYPE_DECREMENT, TYPE_INCREMENT } from '../actions';

const current = (state = 0, action) => {
  switch (action.type) {
    case TYPE_INCREMENT:
      return (state + 1);
    case TYPE_DECREMENT:
      return (state - 1);
    default:
      return state;
  }
};

const reducerCounter = combineReducers({
  current,
});

export default reducerCounter;
