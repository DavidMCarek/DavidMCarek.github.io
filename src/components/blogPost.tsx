import styles from './blogPost.module.scss';

type Props = {
  title: string;
  date: string;
  children: React.ReactNode;
};

const BlogPost: React.FC<Props> = ({ title, date, children }) => {
  return (
    <main className={styles.main}>
      <article>
        <h1>{title}</h1>
        <p className={styles.date}>{date}</p>
        {children}
      </article>
    </main>
  );
};

export default BlogPost;
