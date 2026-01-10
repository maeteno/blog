import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Maeteno",
  description: "Maeteno's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development', link: '/development/redis-cache-uniformity' }
    ],

    sidebar: [
      {
        text: 'Development',
        items: [
          { text: 'Redis Cache Uniformity', link: '/development/redis-cache-uniformity' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maeteno/blog' }
    ],

    search: {
      provider: 'local'
    }
  }
})
