import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';
import { ROUTES } from '@/constants/routes';

const Header: React.FC = () => {
  console.log(styles);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.navLink} href={ROUTES.HOME}>
          Home
        </Link>
        <Link className={styles.navLink} href={ROUTES.HISTORY}>
          History
        </Link>
      </nav>
    </header>
  );
};

export default Header;
