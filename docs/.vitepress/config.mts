import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ReadTheDocs VitePress Example",
  description: "An example of VitePress documentation published on ReadTheDocs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Reference',
        items: [
          { text: 'How to', link: '/how-to' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/makinacorpus/readthedocs-vitepress-example' }
    ]
  }
})
