import React from 'react';
import './style.css';
import { CountBtn, Product } from './components/index';

export default function App() {
  return (
    <div className="container">
      <Product />
      <div className="product-delivery">
        <span className="product-delivery--way">택배배송</span>
        <span className="product-delivery--price">
          3,000원 <b>(주문시 결제)</b>
        </span>
        <p className="product-delivery--rule">10개마다 부과</p>
      </div>
      <CountBtn />
      <div className="product-total">
        <div className="product-total--amount">
          <p>총 상품 금액</p>
          <button>?</button>
        </div>
        <p className="product-total--count">총 수량 1개</p>
        <p className="product-total--price">6,370원</p>
      </div>
      <button className="purchase">
        <img src="img/IconNaver.svg" alt="네이버아이콘" />
        <span>구매하기</span>
      </button>
    </div>
  );
}
