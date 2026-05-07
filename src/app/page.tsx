'use client'
import { useState } from 'react'
import { InvoiceForm } from '@/components/InvoiceForm'
import { InvoicePreview } from '@/components/InvoicePreview'
import { useI18n } from '@/lib/i18n'

export type InvoiceItem = {
  id: number
  name: string
  qty: number
  unitPrice: number
}

export type InvoiceData = {
  type: 'estimate' | 'invoice' | 'receipt'
  docNumber: string
  yourName: string
  yourAddress: string
  yourEmail: string
  clientName: string
  clientAddress: string
  clientEmail: string
  issueDate: string
  dueDate: string
  items: InvoiceItem[]
  taxRate: number
  notes: string
}

const today = new Date().toISOString().split('T')[0]

const defaultData: InvoiceData = {
  type: 'invoice',
  docNumber: 'INV-001',
  yourName: '',
  yourAddress: '',
  yourEmail: '',
  clientName: '',
  clientAddress: '',
  clientEmail: '',
  issueDate: today,
  dueDate: '',
  items: [{ id: 1, name: '', qty: 1, unitPrice: 0 }],
  taxRate: 10,
  notes: '',
}

export default function Home() {
  const [data, setData] = useState<InvoiceData>(defaultData)
  const [tab, setTab] = useState<'form' | 'preview'>('form')
  const { t, lang } = useI18n()

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      {/* Mobile tabs */}
      <div className="flex gap-2 mb-5 lg:hidden no-print">
        {(['form', 'preview'] as const).map(v => (
          <button
            key={v}
            onClick={() => setTab(v)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${tab === v ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}
          >
            {v === 'form' ? t.formTab : t.previewTab}
          </button>
        ))}
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Form */}
        <div className={`${tab === 'form' ? 'block' : 'hidden'} lg:block bg-white rounded-2xl border border-gray-200 p-6 shadow-sm no-print`}>
          <InvoiceForm data={data} onChange={setData} />
        </div>

        {/* Preview */}
        <div className={`${tab === 'preview' ? 'block' : 'hidden'} lg:block`}>
          <InvoicePreview data={data} />
        </div>
      </div>

      {/* AdSense content: 使い方・活用事例・FAQ */}
      <div className="mt-14 space-y-12 no-print">
        {lang === 'ja' ? (
          <>
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">請求書作成ツールの使い方</h2>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">送付先・自分の情報を入力する</p>
                    <p className="text-sm text-gray-600 mt-1">宛先の会社名・氏名、自分の氏名・住所・メールアドレスを入力します。フォームに沿って入力するだけで、書類の体裁が自動で整います。</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">明細を追加する</p>
                    <p className="text-sm text-gray-600 mt-1">品名・数量・単価を入力します。複数の品目を追加でき、合計金額・消費税（10%・8%・非課税）の計算は自動で行われます。</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">プレビューを確認してPDF保存・印刷する</p>
                    <p className="text-sm text-gray-600 mt-1">右側のプレビューで仕上がりを確認したら、ブラウザの印刷機能（Ctrl+P）でPDFとして保存するか、そのまま印刷できます。</p>
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">こんな方に使われています</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">フリーランスエンジニア</p>
                  <p className="text-sm text-gray-600">月末に複数のクライアントへ請求書を送る際、案件ごとに金額・明細が異なるため、毎回テンプレートを編集するのが手間でした。このツールを使えば5分で請求書が完成し、PDFで即送付できます。</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">個人デザイナー・クリエイター</p>
                  <p className="text-sm text-gray-600">見積書・納品書・請求書の3種類を案件の進行に合わせて発行できるため、クライアントへのコミュニケーションが一貫します。インストール不要でどこからでも作成できる点も便利です。</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">副業・スモールビジネス</p>
                  <p className="text-sm text-gray-600">本業の傍らで仕事をしている方も、Excelや有料ソフトなしで正式な書類が作れます。領収書の発行にも対応しており、個人間の取引でも安心して使えます。</p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">個人事業主・小規模法人</p>
                  <p className="text-sm text-gray-600">経理ソフトに移行する前の段階や、スポット的な請求書発行だけに使いたい方に最適です。登録不要で即日利用開始できます。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
              <div className="space-y-4">
                {[
                  ['入力したデータはどこに保存されますか？', 'データはお使いのブラウザ上でのみ処理されます。当サイトのサーバーには一切送信されません。ブラウザを閉じるとデータは消えるため、PDFとして保存しておくことをお勧めします。'],
                  ['PDFで保存するにはどうすればいいですか？', 'ブラウザの印刷ダイアログ（Ctrl+P / Cmd+P）を開き、プリンターの選択欄で「PDFに保存」を選択してください。ChromeやEdgeでは標準で対応しています。'],
                  ['消費税率は変更できますか？', '入力フォームの「税率」欄で10%・8%・0%（非課税）を選択できます。軽減税率の商品や課税なしの取引にも対応しています。'],
                  ['請求書番号は自動で付きますか？', '初期値として「INV-001」が入力されています。番号はご自身でご自由に変更できます。管理上の連番ルールがあれば、それに合わせて入力してください。'],
                ].map(([q, a]) => (
                  <details key={q} className="border border-gray-200 rounded-lg">
                    <summary className="p-4 font-medium text-gray-800 cursor-pointer hover:bg-gray-50">{q}</summary>
                    <p className="px-4 pb-4 text-sm text-gray-600">{a}</p>
                  </details>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">How to Use</h2>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter sender and recipient info</p>
                    <p className="text-sm text-gray-600 mt-1">Fill in your name, address, and email alongside your client's details. The document layout is automatically formatted as you type.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Add line items</p>
                    <p className="text-sm text-gray-600 mt-1">Enter the item name, quantity, and unit price. You can add multiple rows. Subtotals and tax are calculated automatically.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Preview and save as PDF</p>
                    <p className="text-sm text-gray-600 mt-1">Check the live preview on the right, then use your browser's print dialog (Ctrl+P) to save as PDF or print directly.</p>
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Who Uses This Tool</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">Freelance developers &amp; designers</p>
                  <p className="text-sm text-gray-600">Send professional invoices to multiple clients at month-end without any spreadsheet hassle. Generate a PDF in under 5 minutes.</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">Side-business owners</p>
                  <p className="text-sm text-gray-600">Issue quotes, delivery receipts, and invoices as the project progresses — all from the same tool, with no sign-up required.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  ['Is my data sent to your servers?', 'No. All data is processed entirely in your browser. Nothing is transmitted to our servers. Close the tab and the data is gone — save a PDF to keep a copy.'],
                  ['How do I save as PDF?', 'Open the print dialog (Ctrl+P / Cmd+P), then choose "Save as PDF" as your printer. Works natively in Chrome, Edge, and Safari.'],
                  ['Can I change the tax rate?', 'Yes. Use the tax rate field in the form to select 10%, 8%, or 0% (tax-exempt) depending on the transaction.'],
                  ['Can I customize the document number?', 'The default is "INV-001" but you can type any value. Use your own numbering convention to keep records organized.'],
                ].map(([q, a]) => (
                  <details key={q} className="border border-gray-200 rounded-lg">
                    <summary className="p-4 font-medium text-gray-800 cursor-pointer hover:bg-gray-50">{q}</summary>
                    <p className="px-4 pb-4 text-sm text-gray-600">{a}</p>
                  </details>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  )
}
