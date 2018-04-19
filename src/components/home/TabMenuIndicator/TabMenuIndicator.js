import React from 'react';

import styles from './TabMenuIndicator.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const TabMenuIndicator = ({ index, activeIndex, onClick, tabNavi }) => {
  return (
    <li 
      className={cx('main-collection__tab')}
      role="tab"
      aria-controls="section1"
      aria-selected="true">
        <a
          href="#!"
          className={
            index === activeIndex
              ? cx('main-collection__link', 'main-collection__link--active')
              : cx('main-collection__link')
          }
          onClick={onClick}>
          { tabNavi }
        </a>
    </li>
  );
};

export default TabMenuIndicator;