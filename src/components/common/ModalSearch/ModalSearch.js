import React from 'react';
import PropTypes from 'prop-types';

import magnifierIcon from 'static/images/magnifier-icon.svg';
import closeIcon from 'static/images/close-icon.svg';

import styles from './ModalSearch.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ModalSearch = ({ onCloseButtonClick }) => {
  return (
    <div className={cx('modal__wrapper')}>
      <form role="search" action="">
        <input
          className={cx('modal__input')}
          type="text" 
          placeholder="Search Watches" />
        <a href="#!">
          <img
            className={cx('modal__button--search')}
            src={magnifierIcon} 
            alt="" />
        </a>
      </form>

      <div
        className={cx('modal__close')}
        onClick={onCloseButtonClick}>
        <img
          className={cx('modal__button--close')}
          src={closeIcon} 
          alt="" />
      </div>
    </div>
  );
};

ModalSearch.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired
};

export default ModalSearch;