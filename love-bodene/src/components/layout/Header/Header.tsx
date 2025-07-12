// src/components/layout/Header/Header.tsx
import Link from 'next/link'
import styles from './Header.module.css'
import { ThemeToggle } from '@/components/ui/ThemeToggle/ThemeToggle'

export function Header() {
  return (
    <header className={styles.header}>
      <ThemeToggle />
      <div className={styles.logo}>LOVE, BODENE</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/love-letters">Love Letters</Link>
        <Link href="/pillow-talk">Pillow Talk</Link>
        <Link href="/unsent">Unsent Drafts</Link>
      </nav>
    </header>
  )
}