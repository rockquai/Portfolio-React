import React, { Component } from 'react';

import Responsive from 'components/common/Responsive';

import instagram from "static/images/sns-icon-instagram.svg";
import facebook from "static/images/sns-icon-facebook.svg";
import twitter from "static/images/sns-icon-twitter.svg";
import youtube from "static/images/sns-icon-youtube.svg";
import footerInfoData from 'lib/footerInfoData.json';

import styles from './Footer.sass';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Footer extends Component {
  state = {
    socialNetworkList : [
      {
        link: '/',
        src: instagram,
        text: 'instagram'
      },
      {
        link: '/',
        src: facebook,
        text: 'Facebook'
      },
      {
        link: '/',
        src: twitter,
        text: 'twitter'
      },
      {
        link: '/',
        src: youtube,
        text: 'Youtbue'
      } 
    ]
  };

  renderInfoMenuList() {
    return footerInfoData.map((info, index) => {
      return (
        <li className={cx('footer-info__menu--list')} key={index}>
          <a
            className={cx('footer-info__menu--link')} 
            key={index} 
            href={info.url}
            target="_blank">
            {info.menu}
          </a>
        </li>
      )
    })
  };

  renderSocialList() {
    return this.state.socialNetworkList.map((social, index) => {
      return (
        <li className={cx('footer-info__sns--list')} key={index}>
          <a
            className={cx('footer-info__sns--link')}
            key={index} 
            href={social.link}
            target="_blank">
            <img
              className={cx('footer-info__sns--img')}
              src={social.src}
              alt={social.text} />
          </a>
        </li>
      )    
    })
  };

  render() {
    return (
      <footer className={cx('footer-info')}>
        <Responsive>
          <div className={cx('footer-info__wrapper')}>
            <h5 className={cx('footer-info__title')}>OMEGA info</h5>
            <div className={cx('footer-info__menu-wrapper')}>
              <ul className={cx('footer-info__menu')}>
                {this.renderInfoMenuList()}
              </ul>
              <div className={cx('footer-info__copyright')}>Copyright OMEGA SA. All rights reserved.</div>
            </div>

            <div className={cx('footer-info__sns-wrapper')}>
              <ul className={cx('footer-info__sns')}>
                {this.renderSocialList()}
              </ul>
            </div>
          </div>
        </Responsive>
      </footer>
    );
  }
}

export default Footer;