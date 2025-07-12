// src/app/unsent/page.tsx
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { Card } from '@/components/ui/Card/Card'
import { getAllArticles } from '@/utils/mdx'
import styles from './page.module.css'

export default async function Unsent() {
  const articles = await getAllArticles('unsent')

  return (
    <MainLayout>
      <main className={styles.main}>
        <h1>Unsent Drafts</h1>
        <div className={styles.cardGrid}>
          {articles.map((article) => (
            <Card key={article.slug} href={`/unsent/${article.slug}`}>
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
                Random thoughts coming soon...
              </Card>
              <Card>
                Unsent drafts to be shared...
              </Card>
              <Card>
                More content soon...
              </Card>
            </>
          )}
        </div>
      </main>
    </MainLayout>
  )
}