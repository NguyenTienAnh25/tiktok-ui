import React from 'react';

import HeadTippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPlus,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feadback and help',
    to: '/feadback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoaa',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* Tìm kiếm */}
        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <HeadTippy delay={[0, 50]} content="Upload videos" placement="bottom">
                <button className={cx('actions-btn')}>
                  <UploadIcon />
                </button>
              </HeadTippy>
              <HeadTippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </HeadTippy>

              <HeadTippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </HeadTippy>
            </>
          ) : (
            <>
              <Button text>
                <FontAwesomeIcon icon={faPlus} /> Upload
              </Button>
              <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Login
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6201e77d68ea9912b78c7be09ce10f69~c5_100x100.jpeg?x-expires=1654920000&x-signature=cQpJ%2FWtOB3xpG5KOgod8rtH4NrM%3D"
                className={cx('user-avatar')}
                alt="Nguyen tien anh"
              />
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
