import { defineConfig } from 'vitepress'
import { zhConfig } from './locales/zh'
import { enConfig } from './locales/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Maeteno",
  description: "Maeteno's Blog",

  rewrites: {
    'zh/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  // 站点图标
  head: [
    ['link', { rel: 'icon', href: '/icon/avatar.png' }]
  ],

  // 国际化配置
  locales: {
    root: { label: '简体中文', link: '/', ...zhConfig },
    en: { label: 'English', link: '/en/', ...enConfig }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon/avatar.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maeteno/blog' }
    ],

    search: {
      provider: 'local'
    }
  }
})
