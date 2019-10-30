/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/carousel';
import CarouselItem from '../components/carouselItem';
import Footer from '../components/Footer';
//import useInitialState from '../Hooks/useInitialState'

const Home = ({ mylist, originals, trends }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Videos Originales'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
