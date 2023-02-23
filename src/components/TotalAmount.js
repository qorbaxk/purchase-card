import React from 'react';

const TotalAmount = () => {
  return (
    <div className="product-total">
      <div className="product-total--amount">
        <p>총 상품 금액</p>
        <button>?</button>
      </div>
      <p className="product-total--count">총 수량 1개</p>
      <p className="product-total--price">6,370원</p>
    </div>
  );
};

export default TotalAmount;
