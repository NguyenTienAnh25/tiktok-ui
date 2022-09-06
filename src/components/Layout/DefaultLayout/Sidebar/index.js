import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
  return <div className={cx('wapper')}>Sidebar</div>;
}

export default SideBar;
