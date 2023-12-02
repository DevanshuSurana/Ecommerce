import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsXCircleFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Cancel = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // Additional actions related to canceling the transaction can be added here
  }, []);

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsXCircleFill />
        </p>
        <h2>Transaction Canceled</h2>
        <p className="message">Your transaction has been canceled.</p>
        <p className="description">
          If you have any questions, please email at : 
          <a className="email" href="mailto:gadgetgalaxy@gmail.com">
           gadgetgalaxy@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
