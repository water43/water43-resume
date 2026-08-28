<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Experience } from '../types/resume'

const { t, tm } = useI18n()

const experiences = computed(() => tm('experience') as Experience[])
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ t('sections.experience') }}</h2>
    
    <div class="experience-list">
      <div 
        v-for="(exp, index) in experiences" 
        :key="index" 
        class="experience-item"
      >
        <div class="experience-header">
          <div class="experience-main">
            <h3 class="company">{{ exp.company }}</h3>
            <span class="position">{{ exp.position }}</span>
          </div>
          <span class="period">{{ exp.period }}</span>
        </div>
        
        <p class="description">{{ exp.description }}</p>
        
        <ul class="responsibilities">
          <li v-for="(item, i) in exp.responsibilities" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.experience-item {
  padding: 20px;
  background: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.experience-main {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.company {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.position {
  padding: 2px 10px;
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.period {
  color: var(--text-muted);
  font-size: 14px;
  white-space: nowrap;
}

.description {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 12px;
  line-height: 1.6;
}

.responsibilities {
  margin: 0;
  padding-left: 20px;
}

.responsibilities li {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 1.5;
}

.responsibilities li:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
  }

  .experience-main {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media print {
  .experience-item {
    padding: 12px 16px;
    break-inside: avoid;
  }
}
</style>
