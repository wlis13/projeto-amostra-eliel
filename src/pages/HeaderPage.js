import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/HeaderPage.css';
import logoSite from '../images/jogo-header.png';
import logoSearch from '../images/magnifying-glass.png';
import CardsPage from './CardsPage';
import { getCategories, getProduct, getProductById } from '../util/api';
import carrinho from '../images/carrinho.png';
import menu from '../images/menu-branco.png';
import ShowItens from './showIitens';
// import MyContext from '../context/MyContext';

const HeaderPage = () => {
  // const { getTarget } = useContext(MyContext);

  const [inputValue, setInputValue] = useState({ search: '' });
  const [result, setResult] = useState([]);
  const [showProducts, setShowProducs] = useState([]);

  // if (getTarget) {
  //   const productById = await getProductById(getTarget);
  //   setResult(productById.results);
  // }

  const productsById = async () => {
    const productById = await getProductById(inputValue.search);
    setResult(productById.results);
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    productsById();
  };

  const productsShow = async () => {
    const get = await getProduct();
    setShowProducs(get.results);
  };

  const testando = async () => {
    const a = await getCategories();
    console.log(a);
  }

  useEffect(() => {
    productsShow();
  }, [])

  return (
    <div className="container-Header-page">
      <button onClick={ testando } type="button">testa</button>
      <header className="header-first-page">
        <img className="logo-header" src={ logoSite } alt="logo do site" />
        <label>
          <input
            onChange={ handleChange }
            name="search"
            type="text"
            placeholder="O que você está procurando?"
          />
          <img
            className="logo-search"
            src={ logoSearch }
            alt="logo de busca"
          />
        </label>
        <div className="links-header">
          <img className="logo-menu" src={ menu } alt="logo menu" />

          <Link className="next-page" to="/tintas">Tintas</Link>
          <Link className="next-page" to="/pisos">Pisos</Link>
          <Link className="next-page" to="/banheiro">Banheiro</Link>
          <Link className="next-page" to="/cozinha">Cozinha</Link>

          <div>
            <Link
              to="/cart-user"><img
                className="logo-cart"
                src={ carrinho }
                alt="logo carrinho"
              />
            </Link>
          </div>
        </div>
        <Link className="next-login" to="/Login">Entrar</Link>
      </header>
      <div>
        {
          inputValue.search ? <div className="card-page">
            <CardsPage searchValue={ result } />
          </div> :
            <div className="card-page">
              <ShowItens showValues={ showProducts } />
            </div>
        }
      </div>

    </div >
  );
};

export default HeaderPage