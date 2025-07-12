// src/app/pillow-talk/page.tsx
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { Card } from '@/components/ui/Card/Card'
import { getAllArticles } from '@/utils/mdx'
import styles from './page.module.css'

export default async function PillowTalk() {
  const articles = await getAllArticles('pillow-talk')

  return (
    <MainLayout>
      <main className={styles.main}>
        <h1>Pillow Talk</h1>
        <div className={styles.cardGrid}>
          {articles.map((article) => (
            <Card key={article.slug} href={`/pillow-talk/${article.slug}`}>
              {article.title}
              {article.artist && (
                <div className={styles.cardSubtitle}>
                  {article.artist}
                </div>
              )}
            </Card>
          ))}
          {/* Fallback content if no articles */}
          {articles.length === 0 && (
            <>
              <Card>
                Artist Interview Coming Soon
              </Card>
              <Card>
                More Conversations Coming Soon
              </Card>
            </>
          )}
        </div>
      </main>
    </MainLayout>
  )
}