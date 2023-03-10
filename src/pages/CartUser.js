import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../style/cards.css';
import '../style/Cart.css';
import backPage from '../images/back-page.png';

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
  }, [getPrice]);

  return (
    <div className="container-cart">
      <Link exact to="/"><img className="back-page" src={ backPage } alt="seta de voltar" /></Link>
      <h1 className="title-cart">Seu Carrinho de Compras</h1>
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
      <div className="amount">
        <h3>{ `Subtotal: R$${ Price.toFixed(2) }` }</h3>
        <h3 className="total">{ `Valor da compra: R$${ Price.toFixed(2) }` }</h3>
        <Link className="form" to="/formulario">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default CartUser;