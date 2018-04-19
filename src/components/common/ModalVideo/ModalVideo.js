import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from 'static/images/close-icon.svg';

import styles from './ModalVideo.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ModalVideo = ({ onCloseButtonClick }) => {
  return (
    <div className={cx('modal__wrapper')}>
      <div
        className={cx('modal__close')}
        onClick={onCloseButtonClick}>
        <img
          className={cx('modal__button--close')}
          src={closeIcon} 
          alt="" />
      </div>
      <div className={cx('main-video-wrapper')}>
        <iframe
          className={cx('main-video__iframe')}
          src="https://www.youtube.com/embed/ctj-RDbTBMU"
          title="OMEGA Co-Axial Chronometer - The perfect mechanical movement"
          allowFullScreen />
      </div>
    </div>
  );
};

ModalVideo.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired
};

export default ModalVideo;
