import React, { Component } from 'react';

import ModalSearch from 'components/common/ModalSearch';
import Dimmed from 'components/common/Dimmed';

import magnifierIcon from 'static/images/magnifier-icon.svg';

import styles from './GnbSearch.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class GnbSearch extends Component {
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
      <div className={cx('header-search')}>
      {
        isModalOpened &&
        <ModalSearch
          onCloseButtonClick={() => onModalCloseButtonClick()}
          onHide={onModalBoxHide}
        />
      }

      {
        isModalOpened &&
        <Dimmed visible={dimmedVisible} />
      }
      
        <a href="#!" onClick={onModalBox}>
          <img
            src={magnifierIcon}
            className={cx('header-search__img')}
            alt="검색" />
        </a>
      </div>
    );
  }
}

export default GnbSearch;