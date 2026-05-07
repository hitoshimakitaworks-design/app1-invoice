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
  const { t } = useI18n()

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
    </main>
  )
}
