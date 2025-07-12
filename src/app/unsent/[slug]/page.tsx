// src/app/unsent/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticles } from '@/utils/mdx'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { MDXContent } from '@/components/content/MDXContent/MDXContent'
import Link from 'next/link'
import styles from './page.module.css'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles('unsent')
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const article = await getArticleBySlug('unsent', params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} – Love, Bodene`,
    description: article.excerpt || 'An unsent draft from Love, Bodene',
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug('unsent', params.slug)

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
        <Link href="/unsent" className={styles.backLink}>
          ← Back to Unsent Drafts
        </Link>
      </article>
    </MainLayout>
  )
}