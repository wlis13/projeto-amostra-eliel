import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/HeaderPage.css';
import '../style/category.css';
import logoSite from '../images/jogo-header.png';
import logoSearch from '../images/magnifying-glass.png';
import CardsPage from './CardsPage';
import { getProductById } from '../util/api';
import carrinho from '../images/carrinho.png';
import menu from '../images/menu-branco.png';
import ShowItens from './showIitens';
import Categories from './Categories';
import MyContext from '../context/MyContext';
import valuesCategory from '../util/category.json';
import Slider from './Slider';
import { SwiperSlide } from 'swiper/react';
import primeiraImagen from '../images/primeira-imagen.png';
import segundaImagen from '../images/segunda-imagen.png';
import terceiraImagen from '../images/terceira-imagen.png';
import quartaImagen from '../images/quarta-imagen.png';

const HeaderPage = () => {
  const settings: SliderProps = {
    spaceBetweein: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickbable: true,
    }
  }

  const { click, setClick, theClick, getValue } = useContext(MyContext);

  const [inputValue, setInputValue] = useState({ search: '' });
  const [result, setResult] = useState([]);

  const productsById = async () => {
    const productById = await getProductById(inputValue.search);
    setResult(productById.results);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    productsById();
  };

  const displayFix = () => {
    const options = document.querySelector('.category-menu');
    options.classList.add('menu-display');
  };

  const displayOut = () => {
    const options = document.querySelector('.category-menu');
    options.classList.remove('menu-display');
  };

  const testfuncao = () => {
    if (inputValue.search) {
      setClick(false);
      return (<div className="card-page">
        <CardsPage searchValue={ result } />
      </div>);
    } else if (click) {
      inputValue.search = false;
      return (<div><Categories /></div>);
    } else {
      return (<div className="card-page">
        <ShowItens />
      </div>);
    }
  };

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
          <img
            onMouseOver={ displayFix }
            onMouseOut={ displayOut }
            className="logo-menu"
            src={ menu }
            alt="logo menu"
          />

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
          <Slider settings={ settings }>
            <SwiperSlide>
              <img className="slider" src={ primeiraImagen } alt="imagen slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider" src={ segundaImagen } alt="imagen slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider" src={ terceiraImagen } alt="imagen slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider" src={ quartaImagen } alt="imagen slider" />
            </SwiperSlide>
          </Slider>
        }
      </div>
      <div>
        <div onMouseOut={ displayOut } onMouseOver={ displayFix } className="category-menu">
          { valuesCategory && valuesCategory.map((iten, index) => (
            <div key={ index }>
              <p onMouseUp={ theClick } onClick={ getValue }>{ iten.name }</p>
            </div>
          )) }
        </div>
        { testfuncao() }
      </div>

    </div >
  );
};

export default HeaderPage;
