import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {  useSelector } from 'react-redux';

export default function Login() {
  const [messageError, setMessageError] = useState('');
  const infoUser = useSelector((state) => state);
  const redirectTodo = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const { inputEmail, inputPassword } = e.target;

    if (!inputEmail) {
      setMessageError('correo invalido');
      return;
    }

    if (!inputPassword) {
      setMessageError('contraseña invalida');
      return;
    }

    if (
      infoUser.auth.email === inputEmail.value &&
      infoUser.auth.password === inputPassword.value
    ) {
      sessionStorage.setItem('login', true);
      redirectTodo('/');
    }
    setMessageError('');
    inputPassword.value = '';
  }
  return (
    <div>
      <form className="formSing" onSubmit={handleOnSubmit}>
        <h2 className="formSing__name">Login</h2>
        <span className="formSing__message">{messageError}</span>

        <label htmlFor="email" className="formSing__label">
          Correo:
        </label>
        <input
          className="formSing__input"
          type="email"
          id="email"
          name="inputEmail"
        />
        <label htmlFor="">Contraseña:</label>
        <input
          className="formSing__input"
          type="password"
          id="password"
          name="inputPassword"
        />
        <button type="submit">enviar</button>
      </form>
      <Link to="/register">Registrarse</Link>
    </div>
  );
}
