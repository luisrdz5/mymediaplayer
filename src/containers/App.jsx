import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/carousel';
import CarouselItem from '../components/carouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 &&
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
      }

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title='Videos Originales'>
      <Carousel>
          {videos.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
