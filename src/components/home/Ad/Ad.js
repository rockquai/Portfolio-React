import React from 'react';

import adImgage from "static/images/omega-watch-ad01.jpg";

import styles from './Ad.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Ad = () => {
  return (
    <article className={cx('main-ad-wrapper')}>
      <h4 className={cx('main-ad-title')}>OMEGA NEWS</h4>
      <a href="#!">
        <img
          className={cx('main-ad-img')}
          src={adImgage}
          alt="omega watches news" />
        <div className={cx('main-ad__info-wrapper')}>
          <span className={cx('main-ad__info-title--top')}>ONE TO WATCH</span>
          <span className={cx('main-ad__info-title')}>Beauty in a Bell Jar</span>
          <span className={cx('main-ad__info-subtitle')}>
            See our most feminine watches captured under glass.
          </span>
        </div>
      </a>
    </article>
  );
};

export default Ad;