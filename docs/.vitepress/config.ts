import { defineConfig } from 'vitepress'

const lang = 'zh-CN'
const ogDescription = 'OPQ 文档站'
const ogImage = 'https://main.vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://main.vitejs.dev'

const ITEMS = {
  project: [
    { text: '开发 SDK', link: '/project/sdk' },
    { text: '开源插件', link: '/project/plugins' },
    { text: '实用工具', link: '/project/tools' },
  ],
  knowledge: [
    { text: '排行榜', link: '/other/ranking' },
    { text: 'OPQ 哲学', link: '/other/philosophy' },
    { text: '相关站点', link: '/other/site' },
  ]
}

export default defineConfig({
  title: 'OPQHelper',
  description: ogDescription,
  lang,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: ogTitle }],
    // ['meta', { property: 'og:image', content: ogImage }],
    // ['meta', { property: 'og:url', content: ogUrl }],
    // ['meta', { property: 'twitter:description', content: ogDescription }],
    // ['meta', { property: 'twitter:title', content: ogTitle }],
    // ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { property: 'twitter:image', content: ogImage }],
    // ['meta', { property: 'twitter:url', content: ogUrl }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/opq.logo-only.min.png',

    editLink: {
      pattern: 'https://github.com/opq-osc/opq-helper/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opq-osc/OPQ' }
    ],

    footer: {
      message: 'OPQ Open Source Community',
      copyright: 'MIT Licensed | Copyright © 2022'
    },

    nav: [
      {
        text: '🚀 Guide',
        items: [
          { text: '从零开始搭建 OPQBot', link: '/guide/manual' },
          // { text: 'Docker 快速搭建指南', link: '/guide/docker-start' },
          { text: 'OPQBot Wiki', link: 'https://github.com/opq-osc/OPQ/wiki' },
        ],
      },
      {
        text: '🌈 Project',
        items: ITEMS.project
      },
      {
        text: '📚︎ Knowledge',
        items: ITEMS.knowledge
      },
      {
        text: '🎉 About',
        link: '/about/join',
      },
    ],

    sidebar: {
      '/project/': [
        {
          text: 'Project',
          items: ITEMS.project
        }
      ],
      '/other/': [
        {
          text: 'Knowledge',
          items: ITEMS.knowledge
        }
      ],
    }
  }
})