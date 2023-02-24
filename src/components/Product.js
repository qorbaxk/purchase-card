import React from 'react';

const Product = () => {
  return (
    <>
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
        <p
          className="product-price--discount-rate"
          aria-label="할인율"
          role="text"
        >
          88%
        </p>
        <p
          className="product-price--before-price"
          aria-label="구매 정가"
          role="text"
        >
          56,760원
        </p>
        <p
          className="product-price--after-price"
          aria-label="할인가"
          role="text"
        >
          6,370원
        </p>
      </div>
    </>
  );
};

export default Product;
