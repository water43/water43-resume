<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Certificate {
  name: string
  issuer: string
}

const { t, tm } = useI18n()

const certificates = computed(() => tm('certificates') as Certificate[])
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ t('sections.certificates') }}</h2>
    
    <div class="certificates-list">
      <div 
        v-for="(cert, index) in certificates" 
        :key="index" 
        class="certificate-item"
      >
        <div class="certificate-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="6"></circle>
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
          </svg>
        </div>
        <div class="certificate-content">
          <h3 class="certificate-name">{{ cert.name }}</h3>
          <span class="certificate-issuer">{{ cert.issuer }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certificates-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.certificate-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: var(--bg-light);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  flex: 1;
  min-width: 240px;
  transition: all 0.2s;
}

.certificate-item:hover {
  border-color: #fbbf24;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.15);
}

.certificate-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 10px;
  flex-shrink: 0;
}

.certificate-icon svg {
  width: 24px;
  height: 24px;
  color: #d97706;
}

.certificate-content {
  flex: 1;
}

.certificate-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.certificate-issuer {
  font-size: 13px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .certificate-item {
    min-width: 100%;
  }
}

@media print {
  .certificate-item {
    padding: 12px 14px;
  }

  .certificate-icon {
    width: 36px;
    height: 36px;
  }

  .certificate-icon svg {
    width: 20px;
    height: 20px;
  }
}
</style>
