import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Development', link: '/en/development/redis-cache-uniformity' },
      { text: 'Articles', link: '/en/articles/' },
      { text: 'About', link: '/en/about/' }
    ],
    sidebar: {
      "/en/development/": [
        {
          text: 'Development',
          link: '/en/development/',
          items: [
            { text: 'Redis Cache Uniformity', link: '/en/development/redis-cache-uniformity' }
          ]
        },
        {
          text: 'Spring Boot',
          items: [
            { text: 'Spring Boot Starter Development', link: '/en/development/spring-boot/spring-boot-starter-dev' }
          ]
        }
      ],
      "/en/articles/": [
        {
          text: 'Articles',
          link: '/en/articles/',
          items: [
            { text: 'Long Journey', link: '/en/articles/long-journey' }
          ]
        }
      ],
      "/en/about/": [
        {
          text: 'About',
          link: '/en/about/'
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  }
}
