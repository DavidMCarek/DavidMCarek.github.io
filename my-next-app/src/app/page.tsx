import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <Image
        width={100}
        height={100}
        className={styles.avatar}
        src={'/avatar.webp'}
        alt={'David Carek Avatar'}
      />
    </main>
  )
}
