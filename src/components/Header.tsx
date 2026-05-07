'use client'
import { FileText } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function Header() {
  const { t, lang, toggle } = useI18n()
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 no-print">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-600" size={22} />
          <span className="font-bold text-gray-800 text-sm md:text-base">{t.appName}</span>
        </div>
        <button
          onClick={toggle}
          className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          {lang === 'ja' ? 'EN' : 'JA'}
        </button>
      </div>
    </header>
  )
}
