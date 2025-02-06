import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        width={200}
        height={200}
        className={styles.avatar}
        src={'/avatar.jpeg'}
        alt={'David Carek Avatar'}
      />
      <h1 className={styles.title}>David Carek</h1>
      <Link
        href="https://www.linkedin.com/in/david-carek-8b6b74b0/"
        className={styles.linkedin}
      >
        <Image
          width={30}
          height={30}
          src="/linkedin.svg"
          alt="David Carek LinkedIn"
        />
      </Link>
      <Link href="https://github.com/davidmcarek" className={styles.github}>
        <Image
          width={30}
          height={30}
          src="/github.svg"
          alt="David Carek GitHub"
        />
      </Link>
      <p className={styles.summary}>
        Innovative and results-driven software engineer with over a decade of
        experience building scalable, user-centric applications across diverse
        industries. Proficient in modern frontend and backend technologies, with
        expertise in React, TypeScript, .NET Core, and cloud-based solutions.
        Adept at leading complex projects, optimizing performance, and improving
        development processes to deliver impactful, high-quality software.
        Recognized for collaborative leadership, mentoring teams, and bridging
        technical and non-technical stakeholders to achieve strategic goals.
        Passionate about crafting elegant solutions that enhance user
        experiences and drive business success.
      </p>
    </main>
  );
}
