import styles from './page.module.scss';
import BlogPostListItem from '@/components/blogPostListItem';

export default function Blog() {
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
