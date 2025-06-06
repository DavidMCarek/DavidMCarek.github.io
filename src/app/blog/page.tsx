import BlogPostListItem from '@/components/blogPostListItem';
import { ReactElement } from 'react';
import styles from './page.module.scss';

export default function Blog(): ReactElement {
  const posts = [
    {
      url: '/blog/design-system-pitfalls',
      title: 'Design system pitfalls',
      date: 'Feb 6, 2025',
      description:
        "Let's walk through some common patterns of design systems that developers abuse.",
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Blog Posts</h1>
      <ol className={styles.blogList}>
        {posts.map((post) => (
          <BlogPostListItem key={post.url} {...post} />
        ))}
      </ol>
    </main>
  );
}
