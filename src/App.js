
import React from 'react';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage';
import Login from './pages/Login';
import Pisos from './pages/Pisos';
import CardsPage from './pages/CardsPage';
import CartUser from './pages/CartUser';
import ShowItens from './pages/showIitens';
import Cadastro from './pages/Cadastro';
import Cozinha from './pages/Cozinha';
import Banheiro from './pages/Banheiro';
import Tintas from './pages/Tintas';
import Categories from './pages/Categories';
import CarouselPage from './pages/CarouselPage';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HeaderPage } />
          <Route exact path="/card-page" component={ CardsPage } />
          <Route exact path="/Login" component={ Login } />
          <Route exact path="/cadastro" component={ Cadastro } />
          <Route exact path="/cart-user" component={ CartUser } />
          <Route exact path="/show-itens" component={ ShowItens } />
          <Route exact path="/categories" component={ Categories } />
          <Route exact path="/carrocel" component={ CarouselPage } />
          <Route exact path="/pisos" component={ Pisos } />
          <Route exact path="/cozinha" component={ Cozinha } />
          <Route exact path="/banheiro" component={ Banheiro } />
          <Route exact path="/tintas" component={ Tintas } />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
