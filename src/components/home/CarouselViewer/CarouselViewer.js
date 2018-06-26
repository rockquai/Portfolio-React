import React from 'react';
import PropTypes from 'prop-types';

import styles from './CarouselViewer.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CarouselViewer = ({ index, activeIndex, images, product, description, href }) => {
  return (
    <figure
    className={
      index === activeIndex
        ? cx('main-carousel__tabpanel', 'main-carousel__tabpanel--active')
        : cx('main-carousel__tabpanel')
    }>
      <img 
        className={cx('viewer__image')}
        src={images} 
        alt={product} />

      <div className={cx('main-carousel__watch-info-wrapper')}>
        <p className={cx('main-carousel__watch-info--name')}>
          <a href={href} className={cx('main-carousel__watch-info--link')}>{product}</a>
        </p>

        <p className={cx('main-carousel__watch-info--description')}>
          {description}
        </p>
      </div>
    </figure>
  );
};

CarouselViewer.propTypes = {
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  images: PropTypes.string,
  product: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string
};

export default CarouselViewer;
