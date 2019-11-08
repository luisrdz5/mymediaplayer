import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addFavorite, delFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    if (props.movies) {
      const searchMovies = props.movies.filter((movie) => movie.id === id);
      console.log(searchMovies.length);
      if (searchMovies.length === 0) {
        props.addFavorite({
          'movieId': id, 'userId': props.userId,
        }, {
          id,
          cover,
          title,
          year,
          contentRating,
          duration,
        });
      }
    } else {
      props.addFavorite({
        'movieId': id, 'userId': props.userId,
      }, {
        id,
        cover,
        title,
        year,
        contentRating,
        duration,
      });
    }
  };
  const handleDeleteFavorite = (itemId) => {
    props.delFavorite({
      'movieId': itemId,
      'userId': props.userId,
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='play'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              onClick={() => handleDeleteFavorite(id)}
              alt='remove'
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              onClick={handleSetFavorite}
              alt='plus'
            />
          )}

        </div>
        <p className='carousel-item__details--title'>
          {title}
        </p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};
const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    movies: state.myList,
  };
};

const mapDispatchToProps = {
  addFavorite,
  delFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
