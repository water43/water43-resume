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
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <a :href="'tel:' + t('header.phone')">{{ t('header.phone') }}</a>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <a :href="'mailto:' + t('header.email').replace('(at)', '@')">{{ t('header.email').replace('(at)', '@') }}</a>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span>{{ t('header.age') }}</span>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <span>{{ t('header.experience') }}</span>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
        <span>{{ t('header.education') }}</span>
      </div>
      <div class="contact-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>{{ t('header.location') }}</span>
      </div>
      <div class="contact-item status-active">
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8"></circle>
        </svg>
        <span>{{ t('header.status') }}</span>
      </div>
    </div>

    <div class="summary" v-if="t('header.summary')">
      <p>{{ t('header.summary') }}</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 32px;
  padding-bottom: 28px;
  border-bottom: 2px solid var(--border-color);
}

.header-main {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
}

.header-info {
  flex: 1;
}

.name {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
  letter-spacing: 1px;
}

.title {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 14px;
  font-weight: 500;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 5px 14px;
  background: var(--bg-light);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.tag-primary {
  background: #dbeafe;
  color: var(--primary-color);
  border-color: #bfdbfe;
  font-weight: 500;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 28px;
  padding: 20px 24px;
  background: var(--bg-light);
  border-radius: 10px;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.icon {
  width: 18px;
  height: 18px;
  color: var(--primary-color);
  flex-shrink: 0;
}

.contact-item a {
  color: var(--text-secondary);
  transition: color 0.2s;
}

.contact-item a:hover {
  color: var(--primary-color);
  text-decoration: none;
}

.status-active .icon {
  color: #22c55e;
}

.status-active span {
  color: #22c55e;
  font-weight: 500;
}

.summary {
  padding: 16px 20px;
  background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.summary p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
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
    padding: 16px;
  }

  .name {
    font-size: 26px;
  }
}

@media print {
  .avatar {
    width: 64px;
    height: 64px;
    font-size: 26px;
    box-shadow: none;
  }

  .name {
    font-size: 24px;
  }

  .contact-grid {
    gap: 12px 20px;
    padding: 12px 16px;
  }

  .summary {
    padding: 12px 16px;
  }
}
</style>
