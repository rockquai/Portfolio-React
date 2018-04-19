import React from 'react';

import styles from './Responsive.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Responsive = ({ children, className, ...rest }) => {
  return (
    <div className={cx('common', 'responsive', className)} {...rest}>
      { children }
    </div>
  );
};

export default Responsive;
