import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <img src="img/product.jpg" alt="제품 이미지" />
      <h1>래피젠 코로나 자가 검사 키트 2개입X1박스</h1>
      <div>
        <p>88%</p>
        <p>56,760원</p>
        <p>6,370원</p>
      </div>
      <div>
        <p>택배배송</p>
        <p>
          3,000원 <b>(주문시 결제)</b>
        </p>
        <p>10개마다 부과</p>
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
        구매하기기
      </button>
    </div>
  );
}
