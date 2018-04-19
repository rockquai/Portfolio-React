import React from 'react';
import PropTypes from 'prop-types';

import styles from './CarouselNavigator.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CarouselNavigator = ({ onPrev, onNext }) => {
  return(
    <div className={cx('main-carousel__button-group')}>
      <button className={cx('main-carousel__button', 'main-carousel__button--prev')} onClick={onPrev}>
        <span className={cx('main-carousel__button--title')}>previous omega watches view</span>
      </button>

      <button className={cx('main-carousel__button', 'main-carousel__button--next')} onClick={onNext}>
        <span className={cx('main-carousel__button--title')}>previous omega watches view</span>
      </button>
    </div>
  );
}

CarouselNavigator.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};

export default CarouselNavigator;
