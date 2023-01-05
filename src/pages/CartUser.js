import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../style/cards.css'

const CartUser = () => {

  const { productsCart } = useContext(MyContext);
  const [Price, setPrice] = useState();

  const getPrice = (prec) => {
    const { price } = prec;
    setPrice((prevState) => ({ ...prevState, price }));
  };

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
            <button>Excluir</button>
          </div>
        )) }
      </div>
      <div>
        <h1>{ `Total da compra: ${ Price }` }</h1>
      </div>
    </div>
  );
};

export default CartUser;