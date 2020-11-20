/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

function Display({ result, sign }) {
  return (
    <div className="display-container">
      <div>
        <p className="operation">{sign}</p>
        <h2>
          {result === null ? '0' : result}
        </h2>
      </div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  sign: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  sign: '',
};

export default Display;
