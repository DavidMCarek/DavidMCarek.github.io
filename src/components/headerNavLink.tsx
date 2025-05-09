'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import styles from './headerNavLink.module.scss';

type Props = Readonly<{
  route: string;
  children: string;
}>;

export default function HeaderNavLink({
  route,
  children,
}: Props): ReactElement {
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
}
