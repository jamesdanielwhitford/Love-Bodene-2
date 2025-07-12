// src/app/love-letters/page.tsx
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { Card } from '@/components/ui/Card/Card'
import { getAllArticles } from '@/utils/mdx'
import styles from './page.module.css'

export default async function LoveLetters() {
  const articles = await getAllArticles('love-letters')

  return (
    <MainLayout>
      <main className={styles.main}>
        <h1>Love Letters</h1>
        <div className={styles.cardGrid}>
          {articles.map((article) => (
            <Card key={article.slug} href={`/love-letters/${article.slug}`}>
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
                No love letters yet...
              </Card>
              <Card>
                Coming Soon
              </Card>
            </>
          )}
        </div>
      </main>
    </MainLayout>
  )
}