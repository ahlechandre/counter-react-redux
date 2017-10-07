import { createStore } from 'redux';
import reducerCounter from '../reducers';

/**
 * Store state shape.
 * {
 *    currentNumber: 0,
 * }
 */
const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(reducerCounter, preloadedState);

export default store;
