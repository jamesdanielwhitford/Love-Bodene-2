// src/components/ui/Card/Card.tsx
import Link from 'next/link'
import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
  href?: string
  className?: string
}

export function Card({ children, href, className }: CardProps) {
  const cardContent = (
    <div className={`${styles.card} ${className || ''}`}>
      {children}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className={styles.cardLink}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}