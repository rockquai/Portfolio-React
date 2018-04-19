import React, { Component } from 'react';

import CarouselIndicator from 'components/home/CarouselIndicator';
import CarouselNavigator from 'components/home/CarouselNavigator';
import CarouselViewer from 'components/home/CarouselViewer';

import carouselSlidesData from 'lib/carouselSlidesData.json';

import styles from './Carousel.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Carousel extends Component {
  state = {
    activeIndex: 0
  };

  goToSlide = (index) => {
    this.setState({
      activeIndex: index
    });
  };

  goToPrevSlide = (e) => {
    e.preventDefault();

    const { activeIndex } = this.state;
    let index = activeIndex;
    let slidesLength = carouselSlidesData.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  };

  goToNextSlide = (e) => {
    e.preventDefault();

    const { activeIndex } = this.state;
    let index = activeIndex;
    let slidesLength = carouselSlidesData.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { goToSlide, goToPrevSlide, goToNextSlide } = this;
    const { activeIndex } = this.state;

    return (
      <article className={cx('main-carousel')}>
        <h2 className={(cx('main-carousel__title'))}>mymusictaste MAKE</h2>

        <CarouselNavigator
          className={cx('space-navigator__wrapper')}
          onPrev={goToPrevSlide}
          onNext={goToNextSlide}
          >
        </CarouselNavigator>

        <div className={cx('main-carousel__tablist-wrapper')} role="tablist">
            <ul className={cx('main-carousel__tablist')} role="presentation">
              {carouselSlidesData.map((slide, index) =>
                <CarouselIndicator
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  isActive={activeIndex === index}
                  onClick={e => goToSlide(index)}
                />
              )}
            </ul>
        </div>

        <div className={cx('main-carousel__tabpanel-wrapper')} role="group">
          {carouselSlidesData.map((slide, index) =>
            <CarouselViewer
              key={index}
              index={index}
              activeIndex={activeIndex}
              images={slide.images}
              product={slide.product}
              description={slide.description}
              href={slide.href}
            />
          )}
        </div>
      </article>
    );
  }
}

export default Carousel;