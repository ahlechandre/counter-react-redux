import { createStore } from 'redux';
import reducerCounter from '../reducers';

/**
 * Store state shape.
 * {
 *    currentNumber: 0,
 * }
 */
const store = createStore(reducerCounter);

export default store;
