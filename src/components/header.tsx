import { ROUTES } from '@/constants/routes';
import { ReactElement } from 'react';
import styles from './header.module.scss';
import HeaderNavLink from './headerNavLink';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderNavLink route={ROUTES.HOME}>Home</HeaderNavLink>
        <HeaderNavLink route={ROUTES.RESUME}>Resume</HeaderNavLink>
        <HeaderNavLink route={ROUTES.BLOG}>Blog</HeaderNavLink>
      </nav>
    </header>
  );
}
