import { useLocale } from '../i18n/LocaleContext'
import styles from './Experience.module.css'

export default function Experience() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2 className="section-title">{t.sections.experience}</h2>

      <div className={styles.experienceList}>
        {t.experience.map((exp, index) => (
          <div key={`${exp.company}-${index}`} className={styles.experienceItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <div className={styles.experienceMain}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.position}>{exp.position}</span>
                </div>
                <span className={styles.period}>{exp.period}</span>
              </div>

              <p className={styles.description}>{exp.description}</p>

              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
