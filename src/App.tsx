import ResumeHeader from './components/ResumeHeader'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import { useLocale } from './i18n/LocaleContext'
import styles from './App.module.css'

export default function App() {
  const { locale, t, toggleLocale } = useLocale()

  return (
    <div className={styles.resumeContainer}>
      <div className={`${styles.toolbar} no-print`}>
        <button onClick={toggleLocale} className={styles.btn}>
          {locale === 'zh' ? 'English' : '中文'}
        </button>
        <button
          onClick={() => window.print()}
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          {t.ui.print}
        </button>
      </div>

      <main className={styles.resume}>
        <ResumeHeader />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Skills />
      </main>

      <footer className={`${styles.footer} no-print`}>
        <p>{t.ui.footer}</p>
      </footer>
    </div>
  )
}
