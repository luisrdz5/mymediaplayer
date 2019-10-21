import React from 'react';
import '../assets/styles/components/Footer.scss';
import classNames from 'classnames';

const Footer = (props) => {
  const { isLogin } = props;
  let headerClass;
  if (isLogin) {
    headerClass = classNames('footer blue');
  } else {
    headerClass = classNames('footer');
  }
  return (
    <footer className={headerClass}>
      <a href='./'>Terminos de uso</a>
      <a href='./'>Declaración de Privacidad</a>
      <a href='./'>Centro de Ayuda</a>
    </footer>
  );

};
export default Footer;
