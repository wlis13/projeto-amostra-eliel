import React, { useState } from 'react';
import '../style/Login.css';

function Login() {

  const [getValue, setGetValue] = useState({
    email: '',
    senha: '',
  });

  const isDesabled = () => {
    if (getValue.senha.length >= 6
      && getValue.email.includes('@')
      && getValue.email.includes('.com')) {
      return false
    } else { return true }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setGetValue((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="input-email">
          <input
            data-testid="email-input"
            id="input-email"
            name="email"
            type="text"
            placeholder="digite seu email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="input-senha">
          <input
            data-testid="password-input"
            id="input-senha"
            name="senha"
            type="password"
            placeholder="digite sua senha"
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDesabled() }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;