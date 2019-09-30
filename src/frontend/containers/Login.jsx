import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google.png';
import twitterIcon from '../assets/static/icons8-twitter-16.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia Sesión</h2>
        <form action='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='button' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' name='' id='cbox1' value='checkbox' />
              {' '}
              Recuérdame
            </label>
            <a href='/'>Olvide mi Contraseña</a>
          </div>
        </form>
        <section className='login__container_social-media'>
          <div>
            <img src={googleIcon} alt='Google' />
Inicia Sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Google' />
Inicia Sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
No tienes ninguna cuenta
          {' '}
          <Link to='/register'>
                    Registrate
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchtoProps = {
  loginRequest,
};

export default connect(null, mapDispatchtoProps)(Login);
