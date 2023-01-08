import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../style/cards.css';
import '../style/Cart.css';

const CartUser = () => {

  const { productsCart, removeProductsCart, click } = useContext(MyContext);
  const [Price, setPrice] = useState(0);

  const getPrice = useCallback(() => {
    let countPrice = 0;
    const arrPrice = productsCart.map((iten) => iten.price);
    for (let index = 0; index < arrPrice.length; index += 1) {
      countPrice += arrPrice[index];
    }
    setPrice(countPrice);

  }, [productsCart, setPrice]);

  if (click) {
    console.log('inplementar função para que o preço apareça')
  }

  useEffect(() => {
    getPrice();
  }, [getPrice])

  return (
    <div>
      <Link exact to="/">Voltar</Link>
      <h1>Seu Carrinho de Compras</h1>
      <div className="container-cards">
        { productsCart && productsCart.map((iten, index) => (
          iten.title !== '' &&
          <div className="cards" key={ index }>
            <p>{ iten.title }</p>
            <img src={ iten.thumbnail } alt={ iten.title } />
            <h2>{ `R$${ iten.price }` }</h2>
            <button onClick={ () => { removeProductsCart(index) } }>Excluir</button>
          </div>
        )) }
      </div>
      <div>
        { <h1>{ `Valor da compra: R$${ Price.toFixed(2) }` }</h1> }
      </div>
      <button type="submit">Confirmar Compra</button>
    </div>
  );
};

export default CartUser;