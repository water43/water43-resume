<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Project {
  name: string
  period: string
  tags?: string[]
  description: string
}

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
        <div class="project-tags" v-if="project.tags && project.tags.length">
          <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
        </div>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
    
    <div v-if="projects.length > initialCount" class="show-more no-print">
      <button @click="showAll = !showAll" class="show-more-btn">
        <span>{{ showAll ? '收起' : `展开更多项目` }}</span>
        <svg 
          class="show-more-icon" 
          :class="{ 'rotate': showAll }"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
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
  padding: 18px;
  background: var(--bg-light);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: all 0.25s ease;
}

.project-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);
  transform: translateY(-2px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 12px;
}

.project-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
  line-height: 1.4;
}

.project-period {
  color: var(--text-muted);
  font-size: 12px;
  white-space: nowrap;
  padding: 3px 10px;
  background: white;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.project-tag {
  padding: 2px 8px;
  background: #dbeafe;
  color: var(--primary-color);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}

.project-description {
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.show-more {
  text-align: center;
  margin-top: 20px;
}

.show-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 28px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 24px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.show-more-btn:hover {
  background: #eff6ff;
  border-color: var(--primary-color);
}

.show-more-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.show-more-icon.rotate {
  transform: rotate(180deg);
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

  .project-card:hover {
    transform: none;
    box-shadow: none;
  }
}
</style>
