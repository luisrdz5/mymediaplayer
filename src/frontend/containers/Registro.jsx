import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions'
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <section className='registro'>
      <section className='registro__container'>
        <h2>Regístrate</h2>
        <form action='registro__container--form' onSubmit={handleSubmit}>
          <input
            name= "name"
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name="email"
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name="password"
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <p className='registro__container--register'>
          <Link to='/login'>
                    Iniciar Sesión
          </Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
