import { useLocale } from '../i18n/LocaleContext'
import styles from './ResumeHeader.module.css'

export default function ResumeHeader() {
  const { t } = useLocale()

  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.avatar}>{t.header.name.charAt(0)}</div>
        <div className={styles.headerInfo}>
          <h1 className={styles.name}>{t.header.name}</h1>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagPrimary}`}>
              {t.header.targetPosition}
            </span>
            <span className={styles.tag}>{t.header.targetCity}</span>
          </div>
        </div>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <a href={t.header.github} target="_blank" rel="noreferrer">
            github.com/water43
          </a>
        </div>
        <div className={styles.contactItem}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span>{t.header.experience}</span>
        </div>
        <div className={styles.contactItem}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <span>{t.header.education}</span>
        </div>
        <div className={styles.contactItem}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{t.header.location}</span>
        </div>
      </div>

      {t.header.summary && (
        <div className={styles.summary}>
          <p>{t.header.summary}</p>
        </div>
      )}
    </header>
  )
}
