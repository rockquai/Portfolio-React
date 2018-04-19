import React from 'react';
import PropTypes from 'prop-types';

import styles from './CarouselIndicator.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CarouselIndicator = ({ index, activeIndex, onClick }) => {
  return (
    <li className={cx('main-carousel__tab-indicator')}>
      <a
        className={
          index === activeIndex
            ? cx('main-carousel__tab', 'main-carousel__tab--active')
            : cx('main-carousel__tab')
        }
        onClick={onClick}>
        </a>
    </li>
  );
};

CarouselIndicator.propTypes = {
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  onClick: PropTypes.func
};

export default CarouselIndicator;
