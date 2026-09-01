import { useLocale } from '../i18n/LocaleContext'
import styles from './Skills.module.css'

export default function Skills() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2 className="section-title">{t.sections.skills}</h2>

      <div className={styles.skillsGrid}>
        {t.skills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.skillBar}>
              <div
                className={styles.skillProgress}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.skillCategories}>
        {Object.entries(t.skillCategories).map(([key, category]) => (
          <div key={key} className={styles.skillCategory}>
            <h4 className={styles.categoryTitle}>{category.title}</h4>
            <div className={styles.categoryTags}>
              {category.items.map((item) => (
                <span key={item} className={styles.skillTag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
