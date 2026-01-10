import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '开发', link: '/zh/development/redis-cache-uniformity' },
      { text: '关于', link: '/zh/about/about' },

    ],
    sidebar: {
      "/zh/development/": [
        {
          text: '开发',
          items: [
            { text: 'Redis 缓存一致性', link: '/zh/development/redis-cache-uniformity' }
          ]
        },
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/zh/development/examples/markdown-examples' },
            { text: 'API 示例', link: '/zh/development/examples/api-examples' }
          ]
        }
      ],
      "/zh/about/": [
        {
          text: '关于',
          items: [
            { text: '关于', link: '/zh/about/about' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
}
