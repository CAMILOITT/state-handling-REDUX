import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../store/slice/login/loginSlice';

export default function Register() {
  const [messageError, setMessageError] = useState('');
  const dispatch = useDispatch();
  const registerUser = useSelector((state) => state);
  const redirectionLogin = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const { inputName, inputEmail, inputPassword } = e.target;

    if (!inputName) {
      setMessageError('el nombre es requerido');
      return;
    }

    if (!inputEmail) {
      setMessageError('correo invalido');
      return;
    }

    if (!inputPassword || inputPassword.value.length < 5) {
      setMessageError('contraseña invalida');
      return;
    }

    dispatch(
      register({
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
      })
    );
    setMessageError('');
    redirectionLogin('/login');
    inputName.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
  }

  return (
    <div>
      <form className="formSing" onSubmit={handleOnSubmit}>
        <h3>Register</h3>
        <span className="formSing__messageError">{messageError}</span>
        <label htmlFor="name" className="formSing__label">
          Nombre:
        </label>
        <input
          className="formSing__input"
          type="text"
          id="name"
          name="inputName"
        />
        <label className="formSing__label" htmlFor="email">
          Correo:
        </label>
        <input
          className="formSing__input"
          type="email"
          name="inputEmail"
          id="email"
        />
        <label className="formSing__label" htmlFor="password">
          Contraseña:
        </label>
        <input
          className="formSing__input"
          type="password"
          name="inputPassword"
          id="password"
        />
        <button type="submit">Enviar</button>
      </form>
      <Link to="/login">Iniciar sesión</Link>
    </div>
  );
}
