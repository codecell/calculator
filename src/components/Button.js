/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, customClass }) {
  return (
    <button className={`button ${customClass}`} type="button">{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

Button.defaultProps = {
  customClass: '',
};

export default Button;
