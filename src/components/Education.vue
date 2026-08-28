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
        <div class="education-icon">🎓</div>
        <div class="education-content">
          <div class="education-header">
            <h3 class="school">{{ edu.school }}</h3>
            <span class="period">{{ edu.period }}</span>
          </div>
          <div class="education-details">
            <span class="degree">{{ edu.degree }}</span>
            <span class="separator">·</span>
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
  gap: 16px;
  padding: 16px;
  background: var(--bg-light);
  border-radius: 8px;
}

.education-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  flex-shrink: 0;
}

.education-content {
  flex: 1;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.school {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.period {
  color: var(--text-muted);
  font-size: 14px;
}

.education-details {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 14px;
}

.separator {
  color: var(--border-color);
}

.degree {
  padding: 2px 8px;
  background: #dbeafe;
  color: var(--primary-color);
  border-radius: 4px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .education-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media print {
  .education-item {
    padding: 12px;
  }
}
</style>
