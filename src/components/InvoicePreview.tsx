'use client'
import { Printer } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { InvoiceData } from '@/app/page'

type Props = { data: InvoiceData }

function fmt(n: number) {
  return '¥' + n.toLocaleString()
}

export function InvoicePreview({ data }: Props) {
  const { t } = useI18n()
  const subtotal = data.items.reduce((s, it) => s + it.qty * it.unitPrice, 0)
  const tax = Math.floor(subtotal * (data.taxRate / 100))
  const total = subtotal + tax

  return (
    <div>
      {/* Print button */}
      <div className="mb-4 no-print">
        <button
          onClick={() => window.print()}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          <Printer size={18} /> {t.printBtn}
        </button>
        <p className="text-xs text-gray-400 text-center mt-1">{t.printHint}</p>
      </div>

      {/* Invoice document */}
      <div id="invoice-doc" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-gray-800">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t[data.type]}</h1>
          <div className="text-right text-sm text-gray-500 space-y-1">
            {data.docNumber && <p className="font-mono">#{data.docNumber}</p>}
            <p>{t.issueDate}: {data.issueDate}</p>
            {data.dueDate && <p>{t.dueDate}: {data.dueDate}</p>}
          </div>
        </div>

        {/* From / To */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">{t.from}</p>
            <p className="font-semibold">{data.yourName || '—'}</p>
            {data.yourAddress && <p className="text-sm text-gray-500 whitespace-pre-line">{data.yourAddress}</p>}
            {data.yourEmail && <p className="text-sm text-gray-500">{data.yourEmail}</p>}
          </div>
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{t.to}</p>
            <p className="font-semibold">{data.clientName || '—'}</p>
            {data.clientAddress && <p className="text-sm text-gray-500 whitespace-pre-line">{data.clientAddress}</p>}
            {data.clientEmail && <p className="text-sm text-gray-500">{data.clientEmail}</p>}
          </div>
        </div>

        {/* Items table */}
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-2 text-gray-500 font-medium">{t.description}</th>
              <th className="text-right py-2 text-gray-500 font-medium w-16">{t.qty}</th>
              <th className="text-right py-2 text-gray-500 font-medium w-28">{t.unitPrice}</th>
              <th className="text-right py-2 text-gray-500 font-medium w-28">{t.amount}</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map(item => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-2">{item.name || '—'}</td>
                <td className="py-2 text-right">{item.qty}</td>
                <td className="py-2 text-right">{fmt(item.unitPrice)}</td>
                <td className="py-2 text-right font-medium">{fmt(item.qty * item.unitPrice)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-56 space-y-1 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>{t.subtotal}</span><span>{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>{t.tax}</span><span>{fmt(tax)}</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t-2 border-gray-800 pt-2 mt-2">
              <span>{t.total}</span><span>{fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {data.notes && (
          <div className="mt-8 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-medium mb-1">{t.notes}</p>
            <p className="text-sm text-gray-600 whitespace-pre-line">{data.notes}</p>
          </div>
        )}
      </div>
    </div>
  )
}
