import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Maeteno",
  description: "Maeteno's Blog",

  // 站点图标
  head: [
    ['link', { rel: 'icon', href: '/icon/avatar.png' }]
  ],

  // 国际化配置
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '开发', link: '/zh/development/redis-cache-uniformity' }
        ],
        sidebar: [
          {
            text: '开发',
            items: [
              { text: 'Redis 缓存一致性', link: '/zh/development/redis-cache-uniformity' }
            ]
          },
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh/markdown-examples' },
              { text: 'API 示例', link: '/zh/api-examples' }
            ]
          }
        ],
        outline: {
          level: [2, 3],
          label: '目录'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Development', link: '/en/development/redis-cache-uniformity' }
        ],
        sidebar: [
          {
            text: 'Development',
            items: [
              { text: 'Redis Cache Uniformity', link: '/en/development/redis-cache-uniformity' }
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
            ]
          }
        ],
        outline: {
          level: [2, 3],
          label: 'On this page'
        }
      }
    }
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
