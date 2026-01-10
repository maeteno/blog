import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Development', link: '/en/development/redis-cache-uniformity' },
      { text: 'About', link: '/en/about/about' }
    ],
    sidebar: {
      "/en/development/": [
        {
          text: 'Development',
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
      "/en/about/": [
        {
          text: 'About',
          items: [
            { text: 'About', link: '/en/about/about' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  }
}
