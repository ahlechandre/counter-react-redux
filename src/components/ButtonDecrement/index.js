import React from 'react';
import PropTypes from 'prop-types';

const ButtonDecrement = ({ onClick }) => (
  <button type="button" onClick={onClick}>-</button>
);

ButtonDecrement.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonDecrement;
