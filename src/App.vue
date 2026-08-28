<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ResumeHeader from './components/ResumeHeader.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

function toggleLocale() {
  currentLocale.value = currentLocale.value === 'zh' ? 'en' : 'zh'
  locale.value = currentLocale.value
}

function printResume() {
  window.print()
}
</script>

<template>
  <div class="resume-container">
    <div class="toolbar no-print">
      <button @click="toggleLocale" class="btn">
        {{ currentLocale === 'zh' ? 'English' : '中文' }}
      </button>
      <button @click="printResume" class="btn btn-primary">
        {{ currentLocale === 'zh' ? '打印 / 导出 PDF' : 'Print / Export PDF' }}
      </button>
    </div>
    
    <main class="resume">
      <ResumeHeader />
      <Experience />
      <Projects />
      <Education />
      <Skills />
    </main>
    
    <footer class="footer no-print">
      <p>© 2024 陈泽鑫 | Built with Vue 3 + TypeScript + Vite</p>
    </footer>
  </div>
</template>

<style scoped>
.resume-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.btn-primary {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.btn-primary:hover {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.resume {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  padding: 40px;
}

.footer {
  text-align: center;
  padding: 20px;
  color: #6b7280;
  font-size: 14px;
}
</style>
