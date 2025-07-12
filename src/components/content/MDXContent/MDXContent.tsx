// src/components/content/MDXContent/MDXContent.tsx
'use client'

import { useMemo } from 'react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import styles from './MDXContent.module.css'

interface MDXContentProps {
  content: string
}

export function MDXContent({ content }: MDXContentProps) {
  const htmlContent = useMemo(() => {
    const processedContent = remark()
      .use(remarkHtml, { sanitize: false })
      .processSync(content)
    return processedContent.toString()
  }, [content])

  return (
    <div 
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}