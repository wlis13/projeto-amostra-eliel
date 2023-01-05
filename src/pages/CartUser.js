import React from 'react';
import CardsPage from './CardsPage';
const CartUser = () => {
  const test = [{ title: "algo", thumbnail: "algo", price: 200 }]
  return (
    <div>
      <CardsPage searchValue={ test } />
    </div>
  );
};

export default CartUser;