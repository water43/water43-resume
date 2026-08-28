<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Education } from '../types/resume'

const { t, tm } = useI18n()

const educations = computed(() => tm('education') as Education[])
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ t('sections.education') }}</h2>
    
    <div class="education-list">
      <div 
        v-for="(edu, index) in educations" 
        :key="index" 
        class="education-item"
      >
        <div class="education-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </div>
        <div class="education-content">
          <div class="education-header">
            <h3 class="school">{{ edu.school }}</h3>
          </div>
          <div class="education-details">
            <span class="degree">{{ edu.degree }}</span>
            <span class="separator">•</span>
            <span class="major">{{ edu.major }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.education-item {
  display: flex;
  gap: 18px;
  padding: 18px 20px;
  background: var(--bg-light);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.education-item:hover {
  border-color: #bfdbfe;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
}

.education-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
  border-radius: 10px;
  flex-shrink: 0;
}

.education-icon svg {
  width: 24px;
  height: 24px;
  color: var(--primary-color);
}

.education-content {
  flex: 1;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.school {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.period {
  color: var(--text-muted);
  font-size: 13px;
  padding: 3px 10px;
  background: white;
  border-radius: 5px;
  border: 1px solid var(--border-color);
}

.education-details {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 14px;
}

.separator {
  color: var(--border-color);
}

.degree {
  padding: 3px 10px;
  background: #dbeafe;
  color: var(--primary-color);
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
}

.major {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .education-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media print {
  .education-item {
    padding: 12px 14px;
    gap: 12px;
  }

  .education-icon {
    width: 40px;
    height: 40px;
  }

  .education-icon svg {
    width: 20px;
    height: 20px;
  }

  .education-item:hover {
    box-shadow: none;
    border-color: var(--border-color);
  }
}
</style>
