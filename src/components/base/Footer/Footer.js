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
        width: '30',
        height: '30',
        text: 'instagram'
      },
      {
        link: '/',
        src: facebook,
        width: '30',
        height: '30',
        text: 'Facebook'
      },
      {
        link: '/',
        src: twitter,
        width: '30',
        height: '30',
        text: 'twitter'
      },
      {
        link: '/',
        src: youtube,
        width: '30',
        height: '30',
        text: 'Youtbue'
      } 
    ]
  };

  renderInfoMenuList() {
    return footerInfoData.map((info, index) => {
      return (
        <li className={cx('footer-info__menu--list')} key={index}>
          <a 
            key={index} 
            href={info.url}
            className={cx('footer-info__menu--link')}>
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
            key={index} 
            href={social.link}
            className={cx('footer-info__sns--link')}>
            <img
              className={cx('footer-info__sns--img')}
              src={social.src}
              width={social.width}
              height={social.height}
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