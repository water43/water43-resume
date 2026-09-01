import { useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import styles from './Projects.module.css'

const INITIAL_COUNT = 6

export default function Projects() {
  const { t } = useLocale()
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? t.projects : t.projects.slice(0, INITIAL_COUNT)

  return (
    <section className="section">
      <h2 className="section-title">{t.sections.projects}</h2>

      <div className={styles.projectsGrid}>
        {displayedProjects.map((project, index) => (
          <div key={`${project.name}-${index}`} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <span className={styles.projectPeriod}>{project.period}</span>
            </div>
            {project.tags && project.tags.length > 0 && (
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>

      {t.projects.length > INITIAL_COUNT && (
        <div className={`${styles.showMore} no-print`}>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={styles.showMoreBtn}
          >
            <span>{showAll ? t.ui.collapseProjects : t.ui.expandProjects}</span>
            <svg
              className={`${styles.showMoreIcon} ${showAll ? styles.rotate : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
