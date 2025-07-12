// src/components/layout/MainLayout/MainLayout.tsx
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}