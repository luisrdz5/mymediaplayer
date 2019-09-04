import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/carousel';
import CarouselItem from '../components/carouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories title='Mi Lista'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Categories title='Tendencias'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Categories title='Videos Originales'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);
export default App;
