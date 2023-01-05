import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../style/cards.css'

const CartUser = () => {

  const { productsCart, removeProductsCart, click } = useContext(MyContext);
  const [Price, setPrice] = useState(0);

  const getPrice = () => {
    let countPrice = 0;
    const arrPrice = productsCart.map((iten) => iten.price);
    for (let index = 0; index < arrPrice.length; index += 1) {
      countPrice += arrPrice[index];
    }
    setPrice(countPrice);
  };

  if (click) {
    window.location.reload();
  }

  useEffect(() => {
    getPrice();
  }, [])

  return (
    <div>
      <Link exact to="/">Voltar</Link>
      <div className="container-cards">
        { productsCart && productsCart.map((iten) => (
          iten.title !== '' &&
          <div className="cards" key={ iten.title }>
            <p>{ iten.title }</p>
            <img src={ iten.thumbnail } alt={ iten.title } />
            <h2>{ `R$${ iten.price }` }</h2>
            <button onClick={ () => { removeProductsCart(iten) } }>Excluir</button>
          </div>
        )) }
      </div>
      <div>
        { <h1>{ `Total da compra: R$${ Price.toFixed(2) }` }</h1> }
      </div>
    </div>
  );
};

export default CartUser;