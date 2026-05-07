'use client'
import { useI18n } from '@/lib/i18n'

export default function PrivacyPage() {
  const { lang } = useI18n()

  if (lang === 'en') return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
        <p className="text-sm text-gray-700">This service (Simple Invoice Maker) does not require user registration. All data entered (invoice details, company names, etc.) is processed locally in your browser and is not sent to our servers.</p>
        <p className="text-sm text-gray-700 mt-2">If you contact us via email, we may retain your email address solely to respond to your inquiry.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. Cookies and Analytics</h2>
        <p className="text-sm text-gray-700">We may use cookies and third-party analytics services (e.g., Google Analytics, Google AdSense) to understand how users interact with our service. These may collect anonymized usage data. You can manage cookie preferences through your browser settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. Third-Party Services</h2>
        <p className="text-sm text-gray-700">We do not sell or share your personal information with third parties, except as required by law or to operate the service (e.g., analytics providers).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. Contact</h2>
        <p className="text-sm text-gray-700">For privacy inquiries: hitoshi.makita.works@gmail.com</p>
      </section>
    </main>
  )

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>
      <p className="text-sm text-gray-500 mb-8">最終更新：2026年5月</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. 収集する情報</h2>
        <p className="text-sm text-gray-700">本サービス（見積書・請求書かんたん作成）は、ユーザー登録を必要としません。入力された請求書の内容・会社名等のデータは、ブラウザ上でのみ処理され、サーバーには送信されません。</p>
        <p className="text-sm text-gray-700 mt-2">お問い合わせメールをいただいた場合、返信目的のみでメールアドレスを保持することがあります。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. Cookieとアクセス解析</h2>
        <p className="text-sm text-gray-700">サービス改善のため、Google Analytics・Google AdSense等のサードパーティサービスを利用する場合があります。これらは匿名化された利用状況データを収集する場合があります。Cookieの設定はブラウザから変更できます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. 第三者への提供</h2>
        <p className="text-sm text-gray-700">法令に基づく場合またはサービス運営上必要な場合（解析サービス等）を除き、個人情報を第三者に提供・販売することはありません。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. お問い合わせ</h2>
        <p className="text-sm text-gray-700">プライバシーに関するお問い合わせ：hitoshi.makita.works@gmail.com</p>
      </section>
    </main>
  )
}
