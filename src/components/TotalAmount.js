import React from 'react';

const TotalAmount = () => {
  return (
    <div className="product-total">
      <div className="product-total--amount">
        <p>총 상품 금액</p>
        <button>?</button>
        <div className="product-total--amount-banner">
          <span>
            총 상품금액에 <b>배송비는 포함되어 있지 않습니다.</b>
          </span>
          <span>결제시 배송비가 추가될 수 있습니다.</span>
          <button>
            <img src="img/CloseButton.svg" alt="배너 닫기 버튼" />
          </button>
        </div>
      </div>
      <p className="product-total--count">총 수량 1개</p>
      <p className="product-total--price">6,370원</p>
    </div>
  );
};

export default TotalAmount;
