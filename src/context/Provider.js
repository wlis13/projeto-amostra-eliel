import { useEffect, useState } from 'react';
import { getProduct, getProductById } from '../util/api';

import MyContext from './MyContext';

const Provider = ({ children }) => {

  const [productsCart, setProductsCart] = useState([{
    category_id: '',
    title: '',
    thumbnail: '',
    price: 0.
  }]);

  const getProducts = (itens) => {
    const { title, thumbnail, price, category_id } = itens;
    const objectProduct = {
      category_id,
      title,
      thumbnail,
      price,
    };
    setProductsCart((prevState) => ([...prevState, objectProduct]));
  };

  const removeProductsCart = (key) => {
    const remove = productsCart.filter((item, index) => index !== key);
    setProductsCart(remove);
  };

  const [click, setClick] = useState(false);
  const theClick = () => {
    setClick(true);
  };

  const [showProducts, setShowProducs] = useState([]);
  const productsShow = async () => {
    const get = await getProduct();
    setShowProducs(get.results);
  };

  useEffect(() => {
    productsShow();
  }, []);

  const [resultClick, setResultClick] = useState([]);
  const getValue = async ({ target }) => {
    const productById = await getProductById(target.innerText);
    setResultClick(productById.results);
  };


  const contextValues = {
    getProducts,
    removeProductsCart,
    theClick,
    setClick,
    getValue,
    productsCart,
    click,
    showProducts,
    resultClick,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
