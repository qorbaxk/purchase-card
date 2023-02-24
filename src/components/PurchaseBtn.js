import React, { useState, useEffect, useRef } from 'react';

const PurchaseBtn = ({ output }) => {
  const [disable, setDisable] = useState(false);
  const btn = useRef();
  const logo = useRef();
  const mouseHover = () => {
    if (!btn.current.disabled) {
      btn.current.style.background = '#0AAE4F';
    }
  };
  const mouseOut = () => {
    if (!btn.current.disabled) {
      btn.current.style.background = '#03C75A';
    }
  };
  useEffect(() => {
    if (btn.current.disabled) {
      btn.current.style.background = '#DEE0E3';
      btn.current.style.color = '#999999';
      btn.current.style.cursor = 'auto';
      logo.current.style.fill = '#999999';
    } else {
      btn.current.style.background = '#03C75A';
      btn.current.style.color = '#ffffff';
      btn.current.style.cursor = 'pointer';
      logo.current.style.fill = '#03C75A';
    }
  }, [output]);

  return (
    <>
      <button
        ref={btn}
        disabled={output === 0 ? true : false}
        className="purchase"
        onMouseOver={mouseHover}
        onMouseOut={mouseOut}
        role="submit"
      >
        <svg
          role="img"
          aria-hidden="true"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="28" height="28" fill="white" />
          <path
            ref={logo}
            d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z"
            fill="#03C75A"
          />
        </svg>

        <span>구매하기</span>
      </button>
    </>
  );
};

export default PurchaseBtn;
