import React, { useState, useEffect } from 'react';

const TotalAmount = ({ output }) => {
  const [view, setView] = useState(false);
  const [price, setPrice] = useState(6370);

  useEffect(() => {
    setPrice(6370 * output);
  }, [output]);

  return (
    <div className="product-total">
      <div className="product-total--amount">
        <p>총 상품 금액</p>
        <button
          onClick={() => {
            setView(true);
          }}
        >
          ?
        </button>
        {view && (
          <div className="product-total--amount-banner">
            <span>
              총 상품금액에 <b>배송비는 포함되어 있지 않습니다.</b>
            </span>
            <span>결제시 배송비가 추가될 수 있습니다.</span>
            <button
              onClick={() => {
                setView(false);
              }}
            >
              <img src="img/CloseButton.svg" alt="배너 닫기 버튼" />
            </button>
          </div>
        )}
      </div>
      <p className="product-total--count">총 수량 {output}개</p>
      <p className="product-total--price">
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </p>
    </div>
  );
};

export default TotalAmount;
