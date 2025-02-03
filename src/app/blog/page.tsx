import Card from '@/components/card';
import Link from 'next/link';

export default function Blog() {
  return (
    <main>
      <Card as="article">
        <Link href="/blog/my-qualms-with-design-systems">
          My qualms with design systems
        </Link>
        <p>Let{"'"}s walk through the disadvantages of design systems.</p>
      </Card>
    </main>
  );
}
