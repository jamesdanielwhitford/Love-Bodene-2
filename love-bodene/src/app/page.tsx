// src/app/page.tsx
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { MarqueeBanner } from '@/components/ui/MarqueeBanner/MarqueeBanner'
import { PlaylistSection } from '@/components/content/PlaylistSection/PlaylistSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <MainLayout>
      <MarqueeBanner />
      
      <main className={styles.main}>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
        <h1>Music Is Memory</h1>
      </main>

      <PlaylistSection />
    </MainLayout>
  )
}