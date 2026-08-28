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
        <div class="timeline-dot"></div>
        <div class="experience-content">
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
    </div>
  </section>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 24px;
}

.experience-list::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--primary-color) 0%, #93c5fd 100%);
  border-radius: 1px;
}

.experience-item {
  position: relative;
  padding-bottom: 28px;
}

.experience-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -24px;
  top: 6px;
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  z-index: 1;
}

.experience-item:first-child .timeline-dot {
  background: var(--primary-color);
}

.experience-content {
  padding: 20px;
  background: var(--bg-light);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.experience-content:hover {
  border-color: #bfdbfe;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 10px;
}

.experience-main {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.company {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
}

.position {
  padding: 3px 12px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
}

.period {
  color: var(--text-muted);
  font-size: 14px;
  white-space: nowrap;
  padding: 4px 12px;
  background: white;
  border-radius: 5px;
  border: 1px solid var(--border-color);
}

.description {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 14px;
  line-height: 1.65;
  padding-left: 2px;
}

.responsibilities {
  margin: 0;
  padding-left: 18px;
}

.responsibilities li {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.6;
  position: relative;
}

.responsibilities li::marker {
  color: var(--primary-color);
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

  .experience-list {
    padding-left: 20px;
  }

  .timeline-dot {
    left: -20px;
    width: 14px;
    height: 14px;
  }
}

@media print {
  .experience-list {
    padding-left: 0;
  }

  .experience-list::before {
    display: none;
  }

  .timeline-dot {
    display: none;
  }

  .experience-item {
    padding-bottom: 16px;
  }

  .experience-content {
    padding: 14px 16px;
    break-inside: avoid;
  }

  .experience-content:hover {
    box-shadow: none;
    border-color: var(--border-color);
  }
}
</style>
