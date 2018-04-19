import React from 'react';
import PropTypes from 'prop-types';

import styles from './Dimmed.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Dimmed = ({ visible }) => visible ? (
    <div className={cx('dimmed')} />
) : null;

Dimmed.propTypes = {
    visible: PropTypes.bool
};

export default Dimmed;