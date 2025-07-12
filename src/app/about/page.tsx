// src/app/about/page.tsx
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { FloatingTextSection } from '@/components/ui/FloatingTextSection/FloatingTextSection'
import styles from './page.module.css'

export default function About() {
  return (
    <MainLayout>
      <main className={styles.aboutMain}>
        <h1 className={styles.bigTitle}>About</h1>
        <div className={styles.introGrid}>
          <p className={styles.poem}>
            this is a<br />
            love letter <br />
            to all<br />
            the things<br />
            unsaid<br /><br />
            unsaid<br /><br />
            unsaid...
          </p>
          <div className={styles.text}>
            <p>Love, Bodene is a personal archive of love letters to the albums that have touched me, and conversations with the artists who make them.</p>
            <p>It's about songs that make you cry on the train, kisses that didn't mean what you thought they did, and the strange ache of growing up while still feeling like you're waiting for something to begin.</p>
            <p>Here, music is memory. I write about grief, love, existential dread, and the art of feeling too much in crowds full of strangers.</p>
            <p>I think about everything way too much, romanticise everything, and believe the right song at the right moment can change your life — or at least make it make sense for three minutes and twenty-eight seconds.</p>
            <p>If you've ever fallen in love mid-set, wiped tears in the backseat, or carried lyrics like quiet companions, you're exactly where you need to be.</p>
            <p><strong>Love always,</strong><br />Bodene</p>
          </div>
        </div>
      </main>

      <section className={styles.aboutZine}>
        <div className={styles.blockLeft}>
          <h2>Who is Bodene?</h2>
          <p><em>No one and everyone.</em> A girl in the crowd.</p>
        </div>
        <div className={styles.blockRight}>
          <h2>What is Love Bodene?</h2>
          <p>A love letter to all things that make me feel alive.</p>
        </div>
      </section>

      <FloatingTextSection />
    </MainLayout>
  )
}