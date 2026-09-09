import { useLocale } from '../i18n/LocaleContext'
import styles from './Skills.module.css'

export default function Skills() {
  const { t } = useLocale()

  return (
    <section className="section">
      <h2 className="section-title">{t.sections.skills}</h2>

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
