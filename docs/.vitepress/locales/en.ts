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
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/en/development/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/en/development/examples/api-examples' }
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
