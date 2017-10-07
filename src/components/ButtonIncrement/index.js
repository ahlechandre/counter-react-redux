import React from 'react';
import PropTypes from 'prop-types';

const ButtonIncrement = ({ onClick }) => (
  <button type="button" onClick={onClick}>+</button>
);

ButtonIncrement.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonIncrement;
