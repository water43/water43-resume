import { useLocale } from '../i18n/LocaleContext'
import styles from './Education.module.css'

export default function Education() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2 className="section-title">{t.sections.education}</h2>

      <div className={styles.educationList}>
        {t.education.map((edu, index) => (
          <div key={`${edu.school}-${index}`} className={styles.educationItem}>
            <div className={styles.educationIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className={styles.educationContent}>
              <div className={styles.educationHeader}>
                <h3 className={styles.school}>{edu.school}</h3>
              </div>
              <div className={styles.educationDetails}>
                <span className={styles.degree}>{edu.degree}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.major}>{edu.major}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
