import Link from 'next/link';

import { ReactElement } from 'react';
import styles from './blogPostListItem.module.scss';

type Props = Readonly<{
  url: string;
  title: string;
  date: string;
  description: string;
}>;

export default function BlogPostListItem({
  url,
  title,
  date,
  description,
}: Props): ReactElement {
  return (
    <li className={styles.post}>
      <h2 className={styles.title}>
        <Link href={url}>{title}</Link>
      </h2>
      <p className={styles.date}>{date}</p>
      <p>{description}</p>
    </li>
  );
}
