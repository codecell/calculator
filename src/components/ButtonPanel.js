/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function ButtonPanel({ onBtnClick }) {
  return (
    <section>
      <div className="buttons-wrapper">
        <Button onClick={() => onBtnClick('AC')} name="AC" />
        <Button onClick={() => onBtnClick('+/-')} name="+/-" />
        <Button onClick={() => onBtnClick('%')} name="%" />
        <Button onClick={() => onBtnClick('÷')} customClass="khakiBg" name="÷" />
      </div>
      <div className="buttons-wrapper">
        <Button onClick={() => onBtnClick('7')} name="7" />
        <Button onClick={() => onBtnClick('8')} name="8" />
        <Button onClick={() => onBtnClick('9')} name="9" />
        <Button onClick={() => onBtnClick('x')} customClass="khakiBg" name="x" />
      </div>
      <div className="buttons-wrapper">
        <Button onClick={() => onBtnClick('4')} name="4" />
        <Button onClick={() => onBtnClick('5')} name="5" />
        <Button onClick={() => onBtnClick('6')} name="6" />
        <Button onClick={() => onBtnClick('-')} customClass="khakiBg" name="-" />
      </div>
      <div className="buttons-wrapper">
        <Button onClick={() => onBtnClick('1')} name="1" />
        <Button onClick={() => onBtnClick('2')} name="2" />
        <Button onClick={() => onBtnClick('3')} name="3" />
        <Button onClick={() => onBtnClick('+')} customClass="khakiBg" name="+" />
      </div>
      <div className="buttons-wrapper">
        <Button onClick={() => onBtnClick('0')} customClass="Zero-button" name="0" />
        <Button onClick={() => onBtnClick('.')} name="." />
        <Button onClick={() => onBtnClick('=')} customClass="khakiBg" name="=" />
      </div>
    </section>
  );
}

ButtonPanel.propTypes = {
  onBtnClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onBtnClick: null,
};

export default ButtonPanel;
