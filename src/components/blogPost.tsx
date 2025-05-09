import { ReactElement } from 'react';
import styles from './blogPost.module.scss';

type Props = Readonly<{
  title: string;
  date: string;
  children: React.ReactNode;
}>;

export default function BlogPost({
  title,
  date,
  children,
}: Props): ReactElement {
  return (
    <main className={styles.main}>
      <article>
        <h1>{title}</h1>
        <p className={styles.date}>{date}</p>
        {children}
      </article>
    </main>
  );
}
