/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, customClass, onClick }) {
  return (
    <button onClick={onClick} className={`button ${customClass}`} type="button">{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  customClass: '',
  onClick: null,
};

export default Button;
