import React, { useState } from 'react';

const CountBtn = ({ output, setOutput }) => {
  const minusOutput = () => {
    if (output > 0) {
      setOutput(output - 1);
    }
  };
  const plusOutput = () => {
    if (output < 99) {
      setOutput(output + 1);
    }
  };

  return (
    <div className="product-quantity">
      <button className="product-quantity--minus" onClick={minusOutput}>
        -
      </button>
      <output className="product-quantity--output">{output}</output>
      <button className="product-quantity--plus" onClick={plusOutput}>
        +
      </button>
    </div>
  );
};

export default CountBtn;
