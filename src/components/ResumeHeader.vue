<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header class="header">
    <div class="header-main">
      <div class="avatar">
        {{ t('header.name').charAt(0) }}
      </div>
      <div class="header-info">
        <h1 class="name">{{ t('header.name') }}</h1>
        <p class="title">{{ t('header.title') }}</p>
        <div class="tags">
          <span class="tag tag-primary">{{ t('header.targetPosition') }}</span>
          <span class="tag">{{ t('header.targetCity') }}</span>
        </div>
      </div>
    </div>
    
    <div class="contact-grid">
      <div class="contact-item">
        <span class="contact-icon">📞</span>
        <span>{{ t('header.phone') }}</span>
      </div>
      <div class="contact-item">
        <span class="contact-icon">✉️</span>
        <a :href="'mailto:' + t('header.email')">{{ t('header.email') }}</a>
      </div>
      <div class="contact-item">
        <span class="contact-icon">🎂</span>
        <span>{{ t('header.age') }}</span>
      </div>
      <div class="contact-item">
        <span class="contact-icon">💼</span>
        <span>{{ t('header.experience') }}</span>
      </div>
      <div class="contact-item">
        <span class="contact-icon">🎓</span>
        <span>{{ t('header.education') }}</span>
      </div>
      <div class="contact-item">
        <span class="contact-icon">📍</span>
        <span>{{ t('header.location') }}</span>
      </div>
      <div class="contact-item">
        <span class="contact-icon">🟢</span>
        <span>{{ t('header.status') }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.header-main {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  flex-shrink: 0;
}

.header-info {
  flex: 1;
}

.name {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.title {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  background: var(--bg-light);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-secondary);
}

.tag-primary {
  background: #dbeafe;
  color: var(--primary-color);
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.contact-icon {
  font-size: 16px;
}

.contact-item a {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .header-main {
    flex-direction: column;
    text-align: center;
  }

  .tags {
    justify-content: center;
  }

  .contact-grid {
    justify-content: center;
  }
}

@media print {
  .avatar {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }

  .name {
    font-size: 24px;
  }

  .contact-grid {
    gap: 12px 24px;
  }
}
</style>
