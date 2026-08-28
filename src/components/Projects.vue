<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '../types/resume'

const { t, tm } = useI18n()
const showAll = ref(false)
const initialCount = 6

const projects = computed(() => tm('projects') as Project[])
const displayedProjects = computed(() => 
  showAll.value ? projects.value : projects.value.slice(0, initialCount)
)
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ t('sections.projects') }}</h2>
    
    <div class="projects-grid">
      <div 
        v-for="(project, index) in displayedProjects" 
        :key="index" 
        class="project-card"
      >
        <div class="project-header">
          <h3 class="project-name">{{ project.name }}</h3>
          <span class="project-period">{{ project.period }}</span>
        </div>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
    
    <div v-if="projects.length > initialCount" class="show-more no-print">
      <button @click="showAll = !showAll" class="show-more-btn">
        {{ showAll ? '收起' : `展开更多 (${projects.length - initialCount})` }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.project-card {
  padding: 16px;
  background: var(--bg-light);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
}

.project-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 12px;
}

.project-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.project-period {
  color: var(--text-muted);
  font-size: 12px;
  white-space: nowrap;
  padding: 2px 8px;
  background: white;
  border-radius: 4px;
}

.project-description {
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.show-more {
  text-align: center;
  margin-top: 16px;
}

.show-more-btn {
  padding: 8px 24px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--primary-color);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.show-more-btn:hover {
  background: var(--bg-light);
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .project-card {
    padding: 12px;
    break-inside: avoid;
  }

  .project-description {
    -webkit-line-clamp: unset;
  }
}
</style>
