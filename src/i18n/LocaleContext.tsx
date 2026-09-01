import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { zh } from '../locales/zh'
import { en } from '../locales/en'
import type { Locale, ResumeLocale } from '../types/resume'

const messages: Record<Locale, ResumeLocale> = { zh, en }

interface LocaleContextValue {
  locale: Locale
  t: ResumeLocale
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh')

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: messages[locale],
      toggleLocale: () => setLocale((prev) => (prev === 'zh' ? 'en' : 'zh')),
    }),
    [locale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
