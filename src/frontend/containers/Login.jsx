/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { loginUser, loginUserTwitter, loginUserGoogle } from '../actions';
import googleIcon from '../assets/static/google.png';
import twitterIcon from '../assets/static/icons8-twitter-16.png';
import Footer from '../components/Footer';

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
    props.loginUser(form, '/');
  };
  const handleGoogle = (event) => {
    event.preventDefault();
    props.loginUserGoogle('/');
  };
  const handleTwitter = (event) => {
    event.preventDefault();
    props.loginUserTwitter('/');
  };
  return (
    <>
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
              required
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
              required
            />
            <button type='submit' className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <input type='checkbox' name='rememberMe' id='cbox1' value='checkbox' onChange={handleInput} />
              <label>
                {' '}
                Recordarme
              </label>
            </div>
            <a href='/'>Olvide mi Contraseña</a>
          </form>
          <section className='login__container_social-media'>
            <div>
              <img src={googleIcon} alt='Google' onClick={handleGoogle} />
              <p onClick={handleGoogle}>
                Inicia Sesión con Google
              </p>
            </div>
            <div>
              <img src={twitterIcon} alt='Google' onClick={handleTwitter} />
              <p onClick={handleTwitter}>
                Inicia Sesión con Twitter
              </p>
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
      <Footer isLogin />
    </>
  );
};

const mapDispatchtoProps = {
  loginUser,
  loginUserTwitter,
  loginUserGoogle,
};

export default connect(null, mapDispatchtoProps)(Login);
