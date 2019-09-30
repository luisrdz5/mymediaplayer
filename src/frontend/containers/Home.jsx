import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/carousel';
import CarouselItem from '../components/carouselItem';
//import useInitialState from '../Hooks/useInitialState'
import '../assets/styles/App.scss';

const Home = ({ mylist, originals, trends }) => {
  return  (
    <>
      <Search isHome />
      {mylist.length > 0  &&
          <Categories title='Mi Lista'>
            <Carousel>
              {mylist.map(item =>
                <CarouselItem 
                  key={item.id} 
                  {...item} 
                  isList
                  />
              )}
            </Carousel>
          </Categories>
      }
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title='Videos Originales'>
      <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
