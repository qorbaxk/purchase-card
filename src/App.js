import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <img
        src="img/ProductImage.svg"
        alt="제품 이미지"
        className="product-img"
      />
      <h1 className="product-title">
        <span>래피젠 코로나 자가 검사 키트</span>
        <span>2개입X1박스</span>
      </h1>
      <div className="product-price">
        <p className="product-price--discount-rate">88%</p>
        <p className="product-price--before-price">56,760원</p>
        <p className="product-price--after-price">6,370원</p>
      </div>
      <div className="product-delivery">
        <span className="product-delivery--way">택배배송</span>
        <span className="product-delivery--price">
          3,000원 <b>(주문시 결제)</b>
        </span>
        <p className="product-delivery--rule">10개마다 부과</p>
      </div>
      <div>
        <button>-</button>
        <output>1</output>
        <button>+</button>
      </div>
      <div>
        <p>총 상품 금액</p>
        <button>?</button>
        <p>총 수량 1개</p>
        <p>6,370원</p>
      </div>
      <button>
        <img src="img/IconNaver.svg" alt="네이버아이콘" />
        구매하기
      </button>
    </div>
  );
}
