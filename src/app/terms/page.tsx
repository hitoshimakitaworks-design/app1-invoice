'use client'
import { useI18n } from '@/lib/i18n'

export default function TermsPage() {
  const { lang } = useI18n()

  if (lang === 'en') return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. Service Overview</h2>
        <p className="text-sm text-gray-700">Simple Invoice Maker is a free browser-based tool for creating invoices, estimates, and receipts. No registration is required for basic use.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. Prohibited Use</h2>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>Using the service for fraudulent, illegal, or harmful purposes</li>
          <li>Attempting to reverse-engineer or disrupt the service</li>
          <li>Creating false documents intended to deceive third parties</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. Disclaimer</h2>
        <p className="text-sm text-gray-700">This service is provided "as is" without warranty of any kind. We are not responsible for any damages arising from use of this service. Documents created with this tool should be reviewed for accuracy before use.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. Changes</h2>
        <p className="text-sm text-gray-700">We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">5. Contact</h2>
        <p className="text-sm text-gray-700">hitoshi.makita.works@gmail.com</p>
      </section>
    </main>
  )

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">利用規約</h1>
      <p className="text-sm text-gray-500 mb-8">最終更新：2026年5月</p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. サービス概要</h2>
        <p className="text-sm text-gray-700">見積書・請求書かんたん作成は、見積書・請求書・領収書をブラウザ上で無料で作成できるツールです。基本機能の利用に登録は不要です。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. 禁止事項</h2>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>不正・違法・有害な目的でのサービス利用</li>
          <li>サービスのリバースエンジニアリングまたは妨害行為</li>
          <li>第三者を欺く目的での虚偽書類の作成</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. 免責事項</h2>
        <p className="text-sm text-gray-700">本サービスは現状有姿で提供されます。利用により生じた損害について、当方は一切の責任を負いません。作成した書類は実際の使用前に内容をご確認ください。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. 規約の変更</h2>
        <p className="text-sm text-gray-700">本規約はいつでも更新される場合があります。変更後もサービスを継続利用した場合、新しい規約に同意したものとみなします。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">5. お問い合わせ</h2>
        <p className="text-sm text-gray-700">hitoshi.makita.works@gmail.com</p>
      </section>
    </main>
  )
}
