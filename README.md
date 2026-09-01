# 陈泽鑫 - 个人简历网站

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite" alt="Vite" />
</p>

一个基于 React + TypeScript + Vite 构建的现代化在线简历网站，支持中英文切换和打印/PDF导出功能。

## ✨ 特性

- 🌐 **中英文双语** - 支持一键切换中/英文版本
- 🖨️ **打印/PDF导出** - 优化的打印样式，可直接导出为 PDF
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代化 UI** - 简洁美观的设计风格
- ⚡ **高性能** - 基于 Vite 的极速开发体验
- 🔧 **类型安全** - 完整的 TypeScript 支持

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看简历

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
├── public/
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/          # React 组件
│   │   ├── ResumeHeader.tsx # 简历头部
│   │   ├── Experience.tsx   # 工作经历
│   │   ├── Projects.tsx     # 项目经历
│   │   ├── Education.tsx    # 教育背景
│   │   ├── Certificates.tsx # 专业证书
│   │   └── Skills.tsx       # 专业技能
│   ├── i18n/
│   │   └── LocaleContext.tsx # 中英文 Context
│   ├── locales/             # 国际化文件
│   │   ├── zh.ts            # 中文
│   │   └── en.ts            # 英文
│   ├── types/
│   │   └── resume.ts        # 简历数据类型
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 应用入口
│   └── style.css            # 全局样式
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
└── vite.config.ts           # Vite 配置
```

## 🎯 如何修改简历内容

简历数据存储在 `src/locales/` 目录下：

- `zh.ts` - 中文版本
- `en.ts` - 英文版本

直接编辑这两个文件即可更新简历内容。数据结构包括：

- `header` - 个人基本信息
- `experience` - 工作经历
- `projects` - 项目经历
- `education` - 教育背景
- `certificates` - 专业证书
- `skills` - 专业技能

## 🖨️ 导出 PDF

1. 点击页面右上角的「打印 / 导出 PDF」按钮
2. 在打印对话框中选择「另存为 PDF」
3. 调整页面设置（推荐 A4 纸张）
4. 点击保存

## 📦 部署

### GitHub Pages

1. 修改 `vite.config.ts` 中的 `base` 为你的仓库名：
   ```ts
   base: '/your-repo-name/',
   ```

2. 构建项目：
   ```bash
   npm run build
   ```

3. 将 `dist` 目录部署到 GitHub Pages

### Vercel / Netlify

直接连接 GitHub 仓库即可自动部署，无需额外配置。

## 🛠️ 技术栈

- **框架**: React 19
- **语言**: TypeScript
- **构建工具**: Vite
- **国际化**: React Context
- **样式**: CSS Modules + CSS Variables

## 📄 许可证

MIT License

---

> 💼 **陈泽鑫** - 前端开发工程师 | 11.5年经验  
> 📧 776025632@qq.com | 📱 15999562336
