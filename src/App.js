import React, { useState } from 'react';
import './style.css';
import {
  CountBtn,
  Product,
  DeliveryInfo,
  TotalAmount,
  PurchaseBtn,
} from './components/index';

export default function App() {
  const [output, setOutput] = useState(1);
  return (
    <div className="container">
      <Product />
      <DeliveryInfo />
      <CountBtn output={output} setOutput={setOutput} />
      <TotalAmount output={output} />
      <PurchaseBtn />
    </div>
  );
}
