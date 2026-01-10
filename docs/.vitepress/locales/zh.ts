import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '开发', link: '/zh/development/redis-cache-uniformity' },
      { text: '文章', link: '/zh/articles/' },
      { text: '关于', link: '/zh/about/' },

    ],
    sidebar: {
      "/zh/development/": [
        {
          text: '开发',
          link: '/zh/development/',
          items: [
            { text: 'Redis 缓存一致性', link: '/zh/development/redis-cache-uniformity' }
          ]
        },
        {
          text: 'Spring Boot',
          items: [
            { text: 'Spring Boot Starter 开发', link: '/zh/development/spring-boot/spring-boot-starter-dev' }
          ]
        }
      ],
      "/zh/articles/": [
        {
          text: '文章',
          link: '/zh/articles/',
          items: [
            { text: '千里之行', link: '/zh/articles/long-journey' }
          ]
        }
      ],
      "/zh/about/": [
        {
          text: '关于',
          link: '/zh/about/'
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
}
