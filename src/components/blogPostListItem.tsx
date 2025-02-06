import Link from 'next/link';

import styles from './blogPostListItem.module.scss';

type Props = {
  url: string;
  title: string;
  date: string;
  description: string;
};

const BlogPostListItem: React.FC<Props> = ({
  url,
  title,
  date,
  description,
}) => {
  return (
    <li className={styles.post}>
      <h2 className={styles.title}>
        <Link href={url}>{title}</Link>
      </h2>
      <p className={styles.date}>{date}</p>
      <p>{description}</p>
    </li>
  );
};

export default BlogPostListItem;
