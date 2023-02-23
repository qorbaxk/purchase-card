import React from "react";
import "./style.css";
import {productImg} from "./assets/product-img.svg";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <img src={productImg} alt="제품 이미지"/>
      
    </div>
  );
}
