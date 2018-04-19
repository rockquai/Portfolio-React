import React from 'react';

import styles from './TabMenuViewer.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TabMenuViewer = ({ index, activeIndex, productTitle, description, images, productName, href }) => {
  return (
    <div
      className={
        index === activeIndex
          ? cx('main-collection__content', 'main-collection__content--active')
          : cx('main-collection__content')}
      role="tabpanel"
      aria-labelledby="tab1">

      <h3 className={cx('main-collection__contents__title')}>
        <strong className={cx('main-collection__contents__title--emphasis')}>{productTitle}</strong>
        <span className={cx('main-collection__contents__subtitle')}>{description}</span>
      </h3>

      <ul className={cx('main-collection__content--list-wrapper')}>
        <li className={cx('main-collection__content--list')}>
          <a href={href[0].href} className={cx('main-collection__content--link')}>
            <img
            className={cx('main-collection__content--img')}
            src={images[0].images}
            alt={productName[0].productName} />

            <div className={cx('main-collection__content--product-name')}>
              {productName[0].productName}
            </div>
          </a>
        </li>
        <li className={cx('main-collection__content--list')}>
          <a href={href[1].href} className={cx('main-collection__content--link')}>
            <img
            className={cx('main-collection__content--img')}
            src={images[1].images}
            alt={productName[1].productName} />

            <div className={cx('main-collection__content--product-name')}>
              {productName[1].productName}
            </div>
          </a>
        </li>
        <li className={cx('main-collection__content--list')}>
          <a href={href[2].href} className={cx('main-collection__content--link')}>
            <img
            className={cx('main-collection__content--img')}
            src={images[2].images}
            alt={productName[2].productName} />

            <div className={cx('main-collection__content--product-name')}>
              {productName[2].productName}
            </div>
          </a>
        </li>
        <li className={cx('main-collection__content--list')}>
          <a href={href[3].href} className={cx('main-collection__content--link')}>
            <img
            className={cx('main-collection__content--img')}
            src={images[3].images}
            alt={productName[3].productName} />

            <div className={cx('main-collection__content--product-name')}>
              {productName[3].productName}
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabMenuViewer;
