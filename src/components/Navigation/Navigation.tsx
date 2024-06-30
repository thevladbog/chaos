import { Link } from '@tanstack/react-router';
import React from 'react';
import { Avatar, DropdownMenuItem, DropdownMenu } from '@gravity-ui/uikit';

import { i18nNav } from './i18n';
import styles from './Navigation.module.scss';
import { Logo } from '../Logo/Logo';

const DropdownMenuItems: DropdownMenuItem[] = [
  {
    action: () => console.log('Delete'),
    text: i18nNav('logout'),
    theme: 'danger',
  },
];

export const Navigation: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.navigation}>
          <Link
            to="/"
            activeProps={{
              className: styles.active,
            }}
          >
            {i18nNav('home')}
          </Link>
          <Link
            to="/kiosks"
            activeProps={{
              className: styles.active,
            }}
          >
            {i18nNav('kiosk')}
          </Link>
          <Link
            to="/changelog"
            activeProps={{
              className: styles.active,
            }}
          >
            {i18nNav('changelog')}
          </Link>
        </div>
      </div>
      <div>
        <DropdownMenu
          items={DropdownMenuItems}
          renderSwitcher={(props) => (
            <div {...props} style={{ cursor: 'pointer' }}>
              <Avatar
                size="l"
                alt="User picture"
                aria-label="Avatar with L size"
                text="SP"
                theme="brand"
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};
