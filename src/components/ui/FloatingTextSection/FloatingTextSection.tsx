// src/components/ui/FloatingTextSection/FloatingTextSection.tsx
'use client'

import styles from './FloatingTextSection.module.css'

const fragments = [
  { text: "This is a love letter", top: "8%", left: "5%" },
  { text: "To ache", top: "18%", right: "10%" },
  { text: "To love", top: "28%", left: "10%" },
  { text: "To loss", top: "38%", right: "15%" },
  { text: "To desire", top: "48%", left: "15%" },
  { text: "To fill the silence", top: "58%", right: "20%" },
  { text: "To what is unsaid", top: "68%", left: "10%" },
  { text: "To dreams that do not exist", top: "78%", right: "15%" },
  { text: "What does it all mean", top: "88%", left: "5%" },
]

export function FloatingTextSection() {
  return (
    <section className={styles.poeticIntro}>
      {fragments.map((fragment, index) => (
        <div
          key={index}
          className={styles.fragment}
          style={{
            top: fragment.top,
            left: fragment.left,
            right: fragment.right,
          }}
          data-text={fragment.text}
        >
          {fragment.text}
        </div>
      ))}
      
      {/* Duplicate fragments for more density */}
      {fragments.map((fragment, index) => (
        <div
          key={`duplicate-${index}`}
          className={styles.fragment}
          style={{
            top: fragment.top,
            left: fragment.left,
            right: fragment.right,
          }}
          data-text={fragment.text}
        >
          {fragment.text}
        </div>
      ))}
    </section>
  )
}