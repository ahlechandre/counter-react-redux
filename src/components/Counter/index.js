// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ButtonDecrement from '../ButtonDecrement';
import ButtonIncrement from '../ButtonIncrement';

const Counter = ({ onIncrement, onDecrement, current }) => (
  <div>
    <h1>
      {current}
    </h1>
    <div>
      <ButtonIncrement onClick={onIncrement} />
      <ButtonDecrement onClick={onDecrement} />
    </div>
  </div>
);

Counter.propTypes = {
  current: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
