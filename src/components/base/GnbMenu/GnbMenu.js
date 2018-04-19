import React, { Component, Fragment } from 'react';

import styles from './GnbMenu.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class GnbMenu extends Component {
  state = {
    isOpen: false,
    links: [{
      text: 'THE COLLECTION',
      link: '/'
    }, {
      text: 'PLANET OMEGA',
      link: '/'
    }, {
      text: 'HER TIME',
      link: '/'
    }, {
      text: 'STORE LOCATOR',
      link: '/'
    }, {
      text: 'CUSTOMER SERVICE',
      link: '/'
    }]
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  };

  handleDocumentClick = (e) => {
    if (!this.refs.navi.contains(e.target) && this.state.isOpen === true) {
      this.setState({
        isOpen: false
      });
    };
  };
  
  menuToggle = (e) => {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderMenuList() {
    return this.state.links.map((link, index) => {
      return (
        <li ref={index + 1} key={index} className={cx('header-nav__rwd--menu-list--item')}>
          <a 
            className={cx('header-nav__rwd--menu-list--link')}
            key={index}
            href={link.link}
            target="_blank">
            {link.text}
          </a>
        </li>
      )
    })
  };

  render() {
    const { menuToggle } = this;
    const { isOpen } = this.state;
    let menuStatus = isOpen ? 'isopen' : '';

    return (
      <Fragment>
        <nav className={cx('header-nav')}>
          <h2 className={cx('header-nav__title')}>omega menu</h2>
          <a href="#!" className={cx('header-nav__link', 'header-nav__link--active')}>THE COLLECTION</a>
          <a href="#!" className={cx('header-nav__link')}>PLANET OMEGA</a>
          <a href="#!" className={cx('header-nav__link')}>HER TIME</a>
          <a href="#!" className={cx('header-nav__link')}>STORE LOCATOR</a>
          <a href="#!" className={cx('header-nav__link')}>CUSTOMER SERVICE</a>
        </nav>

        <nav className={cx('header-nav__rwd')} ref="navi">
          <h2 className={cx('header-nav__title')}>omega menu</h2>
          <div className={cx('header-nav__rwd--menu', menuStatus)} onClick={ menuToggle }>
            <span className={cx('header-nav__rwd--menu-bar')}></span>
            <span className={cx('header-nav__rwd--menu-bar')}></span>
            <span className={cx('header-nav__rwd--menu-bar')}></span>
            <span className={cx('header-nav__rwd--menu-bar')}></span>
          </div>

          <div className={cx('header-nav__rwd--menu-wrapper', menuStatus)}>
            <ul className={cx('header-nav__rwd--menu-list')}>
              { this.renderMenuList() }
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default GnbMenu;