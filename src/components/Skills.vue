<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Skill {
  name: string
  level: number
  category?: string
}

interface SkillCategory {
  title: string
  items: string[]
}

const { t, tm } = useI18n()

const skills = computed(() => tm('skills') as Skill[])
const skillCategories = computed(() => tm('skillCategories') as Record<string, SkillCategory>)
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
    
    <div class="skill-categories">
      <div 
        v-for="(category, key) in skillCategories" 
        :key="key" 
        class="skill-category"
      >
        <h4 class="category-title">{{ category.title }}</h4>
        <div class="category-tags">
          <span v-for="item in category.items" :key="item" class="skill-tag">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.skill-item {
  padding: 14px 16px;
  background: var(--bg-light);
  border-radius: 10px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-level {
  font-size: 12px;
  color: var(--primary-color);
  font-weight: 500;
}

.skill-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
  border-radius: 4px;
  transition: width 0.6s ease;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
}

.skill-category {
  padding: 16px;
  background: var(--bg-light);
  border-radius: 10px;
}

.category-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  padding: 4px 10px;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 12px;
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

  .skill-categories {
    grid-template-columns: 1fr 1fr;
  }
}

@media print {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .skill-item {
    padding: 10px 12px;
  }

  .skill-categories {
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }

  .skill-category {
    padding: 10px;
  }

  .skill-tag {
    padding: 2px 6px;
    font-size: 10px;
  }

  .skill-tag:hover {
    border-color: var(--border-color);
    color: var(--text-secondary);
    background: white;
  }
}
</style>
