<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Skill } from '../types/resume'

const { t, tm } = useI18n()

const skills = computed(() => tm('skills') as Skill[])
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ t('sections.skills') }}</h2>
    
    <div class="skills-grid">
      <div 
        v-for="(skill, index) in skills" 
        :key="index" 
        class="skill-item"
      >
        <div class="skill-header">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div 
            class="skill-progress" 
            :style="{ width: skill.level + '%' }"
          ></div>
        </div>
      </div>
    </div>
    
    <div class="skill-tags">
      <span class="skill-tag">Vue.js</span>
      <span class="skill-tag">TypeScript</span>
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">React</span>
      <span class="skill-tag">Angular</span>
      <span class="skill-tag">Node.js</span>
      <span class="skill-tag">Webpack</span>
      <span class="skill-tag">Vite</span>
      <span class="skill-tag">ECharts</span>
      <span class="skill-tag">AntV</span>
      <span class="skill-tag">Mapbox GL</span>
      <span class="skill-tag">OpenLayers</span>
      <span class="skill-tag">Turf.js</span>
      <span class="skill-tag">WebGIS</span>
      <span class="skill-tag">Element Plus</span>
      <span class="skill-tag">Pinia</span>
      <span class="skill-tag">Vuex</span>
      <span class="skill-tag">qiankun</span>
      <span class="skill-tag">Monorepo</span>
      <span class="skill-tag">Git</span>
      <span class="skill-tag">Docker</span>
      <span class="skill-tag">Nginx</span>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.skill-item {
  padding: 12px;
  background: var(--bg-light);
  border-radius: 8px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.skill-level {
  font-size: 12px;
  color: var(--text-muted);
}

.skill-bar {
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%);
  border-radius: 3px;
  transition: width 0.5s ease;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 14px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.skill-tag:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background: #eff6ff;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media print {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .skill-tags {
    gap: 6px;
  }

  .skill-tag {
    padding: 4px 10px;
    font-size: 11px;
  }
}
</style>
