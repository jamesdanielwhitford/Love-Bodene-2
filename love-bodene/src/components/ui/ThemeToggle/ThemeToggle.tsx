// src/components/ui/ThemeToggle/ThemeToggle.tsx
'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { toggleTheme } = useTheme()

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      Mood Shift
    </button>
  )
}