import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/HeaderPage.css';
import logoSite from '../images/logo-site.png';
import logoSearch from '../images/magnifying-glass.png';
import CardsPage from './CardsPage';
import { getProduct, getProductById } from '../util/api';
import carrinho from '../images/carrinho.png';
import menu from '../images/menu-branco.png';
import ShowItens from './showIitens';

const HeaderPage = () => {
  const [inputValue, setInputValue] = useState({ search: '' });
  const [result, setResult] = useState([]);
  const [categories, setCategories] = useState([]);

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
    setCategories(get.results);
  };

  useEffect(() => {
    productsShow();
  }, [])

  return (
    <div className="container-Header-page">
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
          <div>
            <Link
              to="/cart-user"><img
                className="logo-cart"
                src={ carrinho }
                alt="logo carrinho"
              />
            </Link>
          </div>
          <Link className="next-page" to="/Empresas">Cadastre-se</Link>
          <Link className="next-page" to="/Investimentos"></Link>
          <Link className="next-page" to="/Planos">Planos</Link>
        </div>
        <Link className="next-login" to="/Login">Entrar</Link>
      </header>
      {
        inputValue.search ? <div className="card-page">
          <CardsPage searchValue={ result } />
        </div> :
          <div className="card-page">
            <ShowItens showValues={ categories } />
          </div>
      }
    </div >
  );
};

export default HeaderPage