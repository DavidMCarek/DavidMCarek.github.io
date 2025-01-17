'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './headerNavLink.module.scss';

type Props = {
  route: string;
  children: string;
};

const HeaderNavLink: React.FC<Props> = ({ route, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={classNames(
        styles.navLink,
        pathname === route && styles.active
      )}
      href={route}
    >
      {children}
    </Link>
  );
};

export default HeaderNavLink;
