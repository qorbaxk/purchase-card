import React from 'react';

const CountBtn = () => {
  return (
    <div className="product-quantity">
      <button className="product-quantity--minus">-</button>
      <output className="product-quantity--output">1</output>
      <button className="product-quantity--plus">+</button>
    </div>
  );
};

export default CountBtn;
