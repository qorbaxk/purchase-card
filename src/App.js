import React from 'react';
import './style.css';
import {
  CountBtn,
  Product,
  DeliveryInfo,
  TotalAmount,
  PurchaseBtn,
} from './components/index';

export default function App() {
  return (
    <div className="container">
      <Product />
      <DeliveryInfo />
      <CountBtn />
      <TotalAmount />
      <PurchaseBtn />
    </div>
  );
}
