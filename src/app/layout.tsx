import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: '見積書・請求書かんたん作成 | 無料ツール',
  description: '無料で使えるシンプルな見積書・請求書メーカー。入力するだけで見積書・請求書・領収書をすぐに作成・印刷できます。Free invoice and estimate generator.',
  openGraph: {
    title: '見積書・請求書かんたん作成 | 無料ツール',
    description: '無料で使えるシンプルな請求書メーカー',
    type: 'website',
  },
  verification: {
    google: 'mS7X-tVy63VAOILE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-sans">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  )
}
