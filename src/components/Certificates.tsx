import { useLocale } from '../i18n/LocaleContext'
import styles from './Certificates.module.css'

export default function Certificates() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2 className="section-title">{t.sections.certificates}</h2>

      <div className={styles.certificatesList}>
        {t.certificates.map((cert, index) => (
          <div key={`${cert.name}-${index}`} className={styles.certificateItem}>
            <div className={styles.certificateIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
            </div>
            <div className={styles.certificateContent}>
              <h3 className={styles.certificateName}>{cert.name}</h3>
              <span className={styles.certificateIssuer}>{cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
