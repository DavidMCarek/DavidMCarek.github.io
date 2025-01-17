import React from 'react';
import { ROUTES } from '@/constants/routes';
import HeaderNavLink from './headerNavLink';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderNavLink route={ROUTES.HOME}>Home</HeaderNavLink>
        <HeaderNavLink route={ROUTES.HISTORY}>History</HeaderNavLink>
      </nav>
    </header>
  );
};

export default Header;
