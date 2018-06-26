import React, { Component } from 'react';

import Responsive from 'components/common/Responsive';
import TabMenuIndicator from 'components/home/TabMenuIndicator';
import TabMenuViewer from 'components/home/TabMenuViewer';

import tabMenuData from 'lib/tabMenuData.json';

import styles from './TabMenu.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class TabMenu extends Component {
  state = {
    activeIndex: 0
  };

  goToSlide = (index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { goToSlide } = this;
    const { activeIndex } = this.state;

    return (
      <article className={cx('main-collection')}>
        <h3 className={(cx('main-collection__title'))}>omega watches collection</h3>
        <Responsive>
          <div className={cx('main-collection__tablist-wrapper')}>
            <ul className={cx('main-collection__tablist')}>
              {tabMenuData.map((slide, index) =>
                <TabMenuIndicator
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  isActive={activeIndex === index}
                  tabNavi={slide.tabNavi}
                  onClick={e => goToSlide(index)}
                />
              )}
            </ul>
          </div>

          <div className={cx('main-collection__contents-wrapper')}>
            {tabMenuData.map((slide, index) =>
              <TabMenuViewer
                key={index}
                index={index}
                activeIndex={activeIndex}
                productTitle={slide.productTitle}
                description={slide.description}
                images={slide.thema}
                productName={slide.thema}
                href={slide.thema}
              />
            )}
          </div>
        </Responsive>
      </article>
    );
  }
}

export default TabMenu;