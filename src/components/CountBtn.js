import React from 'react';

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
      <button
        aria-label="상품 수량 줄이기"
        role="button"
        className="product-quantity--minus"
        onClick={minusOutput}
      >
        -
      </button>
      <output
        aria-label="선택한 상품 수량"
        className="product-quantity--output"
      >
        {output}
      </output>
      <button
        aria-label="상품 수량 늘리기"
        role="button"
        className="product-quantity--plus"
        onClick={plusOutput}
      >
        +
      </button>
    </div>
  );
};

export default CountBtn;
