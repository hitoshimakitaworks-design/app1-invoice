'use client'
import { Plus, Trash2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { InvoiceData, InvoiceItem } from '@/app/page'

type Props = { data: InvoiceData; onChange: (d: InvoiceData) => void }

const input = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
const label = 'block text-xs font-medium text-gray-500 mb-1'

export function InvoiceForm({ data, onChange }: Props) {
  const { t } = useI18n()
  const set = (key: keyof InvoiceData, val: unknown) => onChange({ ...data, [key]: val })

  const updateItem = (id: number, key: keyof InvoiceItem, val: string | number) => {
    onChange({ ...data, items: data.items.map(it => it.id === id ? { ...it, [key]: val } : it) })
  }
  const addItem = () => onChange({
    ...data,
    items: [...data.items, { id: Date.now(), name: '', qty: 1, unitPrice: 0 }]
  })
  const removeItem = (id: number) => onChange({ ...data, items: data.items.filter(it => it.id !== id) })

  return (
    <div className="space-y-5">
      {/* Document type */}
      <div>
        <p className={label}>{t.docType}</p>
        <div className="flex gap-2">
          {(['estimate', 'invoice', 'receipt'] as const).map(type => (
            <button
              key={type}
              onClick={() => set('type', type)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${data.type === type ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'}`}
            >
              {t[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Doc number + dates */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={label}>{t.docNumber}</label>
          <input className={input} value={data.docNumber} onChange={e => set('docNumber', e.target.value)} placeholder="INV-001" />
        </div>
        <div>
          <label className={label}>{t.issueDate}</label>
          <input type="date" className={input} value={data.issueDate} onChange={e => set('issueDate', e.target.value)} />
        </div>
        <div>
          <label className={label}>{t.dueDate}</label>
          <input type="date" className={input} value={data.dueDate} onChange={e => set('dueDate', e.target.value)} />
        </div>
      </div>

      {/* From / To */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{t.from}</p>
          <input className={input} placeholder={t.companyName} value={data.yourName} onChange={e => set('yourName', e.target.value)} />
          <input className={input} placeholder={t.address} value={data.yourAddress} onChange={e => set('yourAddress', e.target.value)} />
          <input className={input} placeholder={t.email} value={data.yourEmail} onChange={e => set('yourEmail', e.target.value)} />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{t.to}</p>
          <input className={input} placeholder={t.companyName} value={data.clientName} onChange={e => set('clientName', e.target.value)} />
          <input className={input} placeholder={t.address} value={data.clientAddress} onChange={e => set('clientAddress', e.target.value)} />
          <input className={input} placeholder={t.email} value={data.clientEmail} onChange={e => set('clientEmail', e.target.value)} />
        </div>
      </div>

      {/* Items */}
      <div>
        <p className={label}>{t.items}</p>
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-1 text-xs text-gray-400 px-1">
            <span className="col-span-5">{t.description}</span>
            <span className="col-span-2 text-right">{t.qty}</span>
            <span className="col-span-3 text-right">{t.unitPrice}</span>
            <span className="col-span-2 text-right">{t.amount}</span>
          </div>
          {data.items.map(item => (
            <div key={item.id} className="grid grid-cols-12 gap-1 items-center">
              <input className={`${input} col-span-5`} placeholder={t.description} value={item.name} onChange={e => updateItem(item.id, 'name', e.target.value)} />
              <input type="number" className={`${input} col-span-2 text-right`} min="1" value={item.qty} onChange={e => updateItem(item.id, 'qty', Number(e.target.value))} />
              <input type="number" className={`${input} col-span-3 text-right`} min="0" value={item.unitPrice} onChange={e => updateItem(item.id, 'unitPrice', Number(e.target.value))} />
              <span className="col-span-1 text-sm text-right text-gray-700">{(item.qty * item.unitPrice).toLocaleString()}</span>
              <button onClick={() => removeItem(item.id)} className="col-span-1 text-gray-300 hover:text-red-400 flex justify-center">
                <Trash2 size={14} />
              </button>
            </div>
          ))}
          <button onClick={addItem} className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-700 mt-1">
            <Plus size={14} /> {t.addRow}
          </button>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className={label}>{t.notes}</label>
        <textarea className={`${input} h-20 resize-none`} placeholder={t.notesPlaceholder} value={data.notes} onChange={e => set('notes', e.target.value)} />
      </div>
    </div>
  )
}
