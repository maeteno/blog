import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开发', link: '/development/redis-cache-uniformity' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about/' },

    ],
    sidebar: {
      "/development/": [
        {
          text: '开发',
          link: '/development/',
          items: [
            { text: 'Redis 缓存一致性', link: '/development/redis-cache-uniformity' }
          ]
        },
        {
          text: 'Spring Boot',
          link: '/development/spring-boot/',
          items: [
            { text: 'Spring Boot Starter 开发', link: '/development/spring-boot/spring-boot-starter-dev' }
          ]
        }
      ],
      "/articles/": [
        {
          text: '文章',
          link: '/articles/',
          items: [
            { text: '千里之行', link: '/articles/long-journey' }
          ]
        }
      ],
      "/about/": [
        {
          text: '关于本站',
          link: '/about/'
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
}
