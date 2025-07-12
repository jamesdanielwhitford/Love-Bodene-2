// src/app/pillow-talk/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticles } from '@/utils/mdx'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { MDXContent } from '@/components/content/MDXContent/MDXContent'
import Link from 'next/link'
import styles from './page.module.css'

export async function generateStaticParams() {
  const articles = await getAllArticles('pillow-talk')
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const article = await getArticleBySlug('pillow-talk', slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} – Love, Bodene`,
    description: article.excerpt || `A conversation with ${article.artist || 'an artist'}`,
  }
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const article = await getArticleBySlug('pillow-talk', slug)

  if (!article) {
    notFound()
  }

  return (
    <MainLayout>
      <article className={styles.article}>
        <h1>{article.title}</h1>
        {article.artist && (
          <p className={styles.artistInfo}>
            {article.artist} {article.album && `• ${article.album}`}
          </p>
        )}
        <MDXContent content={article.content} />
        <Link href="/pillow-talk" className={styles.backLink}>
          ← Back to Pillow Talk
        </Link>
      </article>
    </MainLayout>
  )
}