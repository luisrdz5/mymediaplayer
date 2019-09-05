import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google.png';
import twitterIcon from '../assets/static/icons8-twitter-16.png';
import { Link } from 'react-router-dom';

const Login = () => (
    <section className="login">
        <section className="login__container">
        <h2>Inicia Sesión</h2>
        <form action="login__container--form">
            <input className="input" type="text" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña" />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
            <label>
                <input type="checkbox" name="" id="cbox1" value="checkbox" />Recuérdame
            </label>
            <a href="/">Olvide mi Contraseña</a>
            </div>
        </form>
        <section className="login__container_social-media">
            <div>
            <img src={googleIcon} alt="Google" />Inicia Sesión con Google
            </div>
            <div>
                <img src={twitterIcon} alt="Google" />Inicia Sesión con Twitter
            </div>
        </section>
            <p className="login__container--register">No tienes ninguna cuenta 
                <Link to="/register">
                    Registrate
                </Link>
            </p>
        </section>
  </section>
);

export default Login;
