// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ButtonDecrement from '../ButtonDecrement';
import ButtonIncrement from '../ButtonIncrement';

const Counter = ({ onIncrement, onDecrement, currentNumber }) => (
  <div>
    <h1>
      {currentNumber}
    </h1>
    <div>
      <ButtonIncrement onClick={onIncrement} />
      <ButtonDecrement onClick={onDecrement} />
    </div>
  </div>
);

Counter.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
