const {
  genESSidebarConfig,
  genVueSidebarConfig,
  genDataStructureSidebarConfig
} = require('./slider');

module.exports = {
  base: '/x-shard/',
  title: 'X-SHARD',
  description: 'keep hungry keep foolish',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    repo: 'https://github.com/hefeng1208',
    repoLabel: 'GitHub',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: require('./nav/index'),
    sidebar: [
      {
        title: 'Vue 3 源码解析',
        collapsable: true,
        children: genVueSidebarConfig('/blog/frontend/vue/')
      },
      {
        title: 'ES 语法详解',
        collapsable: true,
        children: genESSidebarConfig('/blog/frontend/es/')
      },
      {
        title: '数据结构',
        collapsable: true,
        children: genDataStructureSidebarConfig('/blog/frontend/es/')
      }
    ]
  }
}


