import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/HeaderPage.css';
import logoSite from '../images/logo-site.png'
import logoSearch from '../images/magnifying-glass.png'
import CardsPage from './CardsPage';
import { getProductById } from '../util/api';

const HeaderPage = () => {
  const [inputValue, setInputValue] = useState({ search: '' });
  const [result, setResult] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const productsById = async () => {
    const productById = await getProductById(inputValue.search);
    setResult(productById.results)
  }

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
            onClick={ productsById }
            className="logo-search"
            src={ logoSearch }
            alt="logo de busca"
          />
        </label>
        <div className="links-header">
          <Link className="next-page" to="/Empresas">Para Empresas</Link>
          <Link className="next-page" to="/Investimentos">Controle de Inverstimentos</Link>
          <Link className="next-page" to="/Planos">Planos</Link>
        </div>
        <Link className="next-login" to="/Login">Entrar</Link>
      </header>
      <div className="card-page">
        <CardsPage searchValue={ result } />
      </div>

    </div >
  );
};

export default HeaderPage