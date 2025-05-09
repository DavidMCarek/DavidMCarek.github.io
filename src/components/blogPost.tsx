import { ReactElement } from 'react';
import styles from './blogPost.module.scss';

type Props = Readonly<{
  title: string;
  publishDate: string;
  updateDate?: string;
  children: React.ReactNode;
}>;

export default function BlogPost({
  title,
  publishDate,
  updateDate,
  children,
}: Props): ReactElement {
  return (
    <main className={styles.main}>
      <article>
        <h1>{title}</h1>
        <p className={styles.date}>Published: {publishDate}</p>
        {updateDate && <p className={styles.date}>Updated: {updateDate}</p>}
        {children}
      </article>
    </main>
  );
}
