import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };
  return (
    <section className='registro'>
      <section className='registro__container'>
        <h2>Regístrate</h2>
        <form action='registro__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
            required
          />
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
          <button type='submit' className='button'>Registrarme</button>
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
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
