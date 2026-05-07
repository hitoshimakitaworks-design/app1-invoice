'use client'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-8 no-print">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs text-gray-400">{t.appName} — {t.tagline}</p>
        <p className="text-xs text-gray-300 mt-1">© 2026 Free to use</p>
      </div>
    </footer>
  )
}
