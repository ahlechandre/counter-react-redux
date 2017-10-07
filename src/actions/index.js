/**
 * Action constants.
 */
export const TYPE_INCREMENT = 'INCREMENT';
export const TYPE_DECREMENT = 'DECREMENT';

/**
 * Action creators.
 */
export const actIncrement = () => ({
  type: TYPE_INCREMENT,
});

export const actDecrement = () => ({
  type: TYPE_DECREMENT,
});
