import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import { HowToProvider } from '@/lib/howToContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { HowToDrawer } from '@/components/HowToDrawer'
import { HowToLayout } from '@/components/HowToLayout'
import { FeedbackWidget } from '@/components/FeedbackWidget'
import { PaywallBanner } from '@/components/PaywallBanner'

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
    google: '3ERn8pqN4gQ3dHkD8UsRSbDWPxsvZY1mQog5ynGaO4g',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-sans">
        <I18nProvider>
          <HowToProvider>
            <HowToLayout>
              <Header />
              {children}
              <Footer />
            </HowToLayout>
            <HowToDrawer />
            <FeedbackWidget />
            <PaywallBanner />
            <CookieBanner />
          </HowToProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
