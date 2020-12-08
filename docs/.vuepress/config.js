const { genESSidebarConfig, genVueSidebarConfig } = require('./slider');

module.exports = {
  base: '/x-shard/',
  title: 'X-SHARD',
  description: 'testtest',
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
      }
    ]
  }
}


