import React from 'react';

const DeliveryInfo = () => {
  return (
    <div className="product-delivery">
      <span className="product-delivery--way">택배배송</span>
      <span className="product-delivery--price">
        3,000원 <b>(주문시 결제)</b>
      </span>
      <p className="product-delivery--rule">10개마다 부과</p>
    </div>
  );
};

export default DeliveryInfo;
