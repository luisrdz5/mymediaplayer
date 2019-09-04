import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='./images/adults-alcohol-alcoholic-beverage-1304473.jpg' alt='people' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={ playIcon } alt='play' />
        <img className='carousel-item__details--img' src={ plusIcon } alt='plus' />
      </div>
      <p className='carousel-item__details--title'>
            Título Descriptivo
      </p>
      <p className='carousel-item__details--subtitle'>
            2019 16+ 114 minutos
      </p>
    </div>
  </div>
);

export default CarouselItem;
