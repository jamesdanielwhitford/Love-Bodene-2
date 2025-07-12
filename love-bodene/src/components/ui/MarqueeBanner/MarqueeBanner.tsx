// src/components/ui/MarqueeBanner/MarqueeBanner.tsx
import styles from './MarqueeBanner.module.css'

export function MarqueeBanner() {
  const marqueeText = "LISTEN*FEEL*ROMANCE*DEATH*FEAR*FAITH*DESIRE*"
  
  return (
    <div className={styles.banner}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
        <div className={styles.marqueeContent}>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </div>
  )
}