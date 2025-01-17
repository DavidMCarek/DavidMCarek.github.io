import Image from 'next/image';
import styles from './page.module.scss';
import Card from '@/components/card';

export default function Home() {
  return (
    <main>
      <div className={styles.avatarContainer}>
        <Image
          width={200}
          height={200}
          className={styles.avatar}
          src={'/avatar.webp'}
          alt={'David Carek Avatar'}
        />
      </div>
      <Card>
        <h1 className={styles.title}>David Carek</h1>
        <p className={styles.summary}>
          Innovative and results-driven software engineer with over a decade of
          experience building scalable, user-centric applications across diverse
          industries. Proficient in modern frontend and backend technologies,
          with expertise in React, TypeScript, .NET Core, and cloud-based
          solutions. Adept at leading complex projects, optimizing performance,
          and improving development processes to deliver impactful, high-quality
          software. Recognized for collaborative leadership, mentoring teams,
          and bridging technical and non-technical stakeholders to achieve
          strategic goals. Passionate about crafting elegant solutions that
          enhance user experiences and drive business success.
        </p>
      </Card>
    </main>
  );
}
