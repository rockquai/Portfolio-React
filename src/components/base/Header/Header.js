import React from 'react';

import Responsive from 'components/common/Responsive';
import GnbMenu from 'components/base/GnbMenu';
import GnbSearch from 'components/base/GnbSearch';
import logo from 'static/images/logo-icon.svg';

import styles from './Header.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('base', 'header')}>
    <Responsive className={cx('header-wrapper')}>
      <h1 className={cx('header-logo')}>
        <a href="#!">
          <img
            src={logo}
            className={cx('header-logo__img')}
            alt="오메가 로고" />
          </a>
      </h1>
      <GnbMenu />
      <GnbSearch />
    </Responsive>
  </header>
);

export default Header;