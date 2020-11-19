/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <section>
      <div className="buttons-wrapper">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button customClass="khakiBg" name="÷" />
      </div>
      <div className="buttons-wrapper">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button customClass="khakiBg" name="X" />
      </div>
      <div className="buttons-wrapper">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button customClass="khakiBg" name="-" />
      </div>
      <div className="buttons-wrapper">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button customClass="khakiBg" name="+" />
      </div>
      <div className="buttons-wrapper">
        <Button customClass="Zero-button" name="0" />
        <Button name="." />
        <Button customClass="khakiBg" name="=" />
      </div>
    </section>
  );
}

export default ButtonPanel;
