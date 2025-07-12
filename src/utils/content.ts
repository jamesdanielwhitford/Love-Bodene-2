// src/utils/content.ts

// Content management utilities
// This file is ready for future content-related helper functions

export interface Article {
  slug: string
  title: string
  artist?: string
  album?: string
  date: string
  excerpt?: string
  category: 'love-letters' | 'pillow-talk' | 'unsent'
}

// Placeholder for future content fetching functions
export async function getArticles(category?: string): Promise<Article[]> {
  // Future implementation for fetching articles from MDX files
  return []
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Future implementation for fetching single article
  return null
}