/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <header>
      <h1>
        {`Result => ${result}`}
      </h1>
    </header>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
