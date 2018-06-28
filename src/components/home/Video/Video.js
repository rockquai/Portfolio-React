import React, { Component, Fragment } from 'react';

// import Responsive from 'components/common/Responsive';
import ModalVideo from 'components/common/ModalVideo';
import Dimmed from 'components/common/Dimmed';

import videoImages from 'static/images/omega-watch-youtube03.jpg';
import youtubeIcon from 'static/images/youtube-icon.svg';

import styles from './Video.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Video extends Component {
  state = {
    isModalOpened: false,
    dimmedVisible: false
  }

  onModalCloseButtonClick = () => {
    this.setState({
      isModalOpened: false
    });
  }

  onModalBoxHide = () => {
    this.setState({
      dimmedVisible : false
    });
  }

  onModalBox = () => {
    this.setState({
      isModalOpened: true,
      dimmedVisible: true
    });
  }

  render() {
    const { onModalCloseButtonClick, onModalBoxHide, onModalBox } = this;
    const { isModalOpened, dimmedVisible } = this.state;

    return (
      <Fragment>
        {
          isModalOpened &&
          <ModalVideo
            onCloseButtonClick={() => onModalCloseButtonClick()}
            onHide={onModalBoxHide}
          />
        }

        {
          isModalOpened &&
          <Dimmed visible={dimmedVisible} />
        }

          <article className={cx('main-video')}>
            <h4 className={cx('main-video__title')}>omega watches watch video</h4>
            <div className={cx('main-video-wrapper')} onClick={onModalBox}>
              <img
              className={cx('main-video__img')}
              src={videoImages}
              alt="youtube video" />
              <img
                className={cx('main-video__youtue-icon')}
                src={youtubeIcon}
                alt=""
              />
            </div>
          </article>
      </Fragment>
    );
  }
}

export default Video;
