// src/utils/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface ArticleData {
  slug: string
  title: string
  artist?: string
  album?: string
  date: string
  excerpt?: string
  category: string
  content: string
}

export async function getMDXFiles(directory: string): Promise<string[]> {
  try {
    const fullPath = path.join(contentDirectory, directory)
    const files = fs.readdirSync(fullPath)
    return files.filter(file => file.endsWith('.mdx'))
  } catch {
    return []
  }
}

export async function getArticleBySlug(category: string, slug: string): Promise<ArticleData | null> {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      category,
      content,
      title: data.title || '',
      artist: data.artist,
      album: data.album,
      date: data.date || '',
      excerpt: data.excerpt
    }
  } catch {
    return null
  }
}

export async function getAllArticles(category: string): Promise<ArticleData[]> {
  try {
    const files = await getMDXFiles(category)
    const articles = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, '')
        return getArticleBySlug(category, slug)
      })
    )
    
    return articles
      .filter((article): article is ArticleData => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}