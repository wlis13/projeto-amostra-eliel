import { useEffect, useState } from 'react';
import { getCategories } from '../util/api';
import MyContext from './MyContext';

const Provider = ({ children }) => {

  const [productsCart, setProductsCart] = useState([{
    title: '',
    thumbnail: '',
    price: 0.
  }]);

  const [click, isClick] = useState(false);

  const categories = async () => {
    const categoriesResult = await getCategories();
    return categoriesResult;
  }

  useEffect(() => {
    categories();

  }, []);

  const getProduct = (itens) => {
    const { title, thumbnail, price } = itens;
    const objectProduct = {
      title,
      thumbnail,
      price,
    };
    setProductsCart((prevState) => ([...prevState, objectProduct]));
  };

  const removeProductsCart = (itens) => {
    const remove = productsCart.filter((iten) => iten.title !== itens.title);
    setProductsCart(remove);
    isClick(true);
  };

  const contextValues = {
    categories,
    getProduct,
    removeProductsCart,
    productsCart,
    click,
  };

  return (
    <MyContext.Provider value={ contextValues }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
