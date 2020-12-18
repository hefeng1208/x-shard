const { changeBasePath } = require('../utils/helper')

function genVueSidebarConfig(basePath) {
  const addItem = [
    {
      title: 'Reactive 实现原理',
      path: 'vue-reactive',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}

function genESSidebarConfig(basePath) {
  const addItem = [
    {
      title: 'ES',
      path: 'es6',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}

function genDataStructureSidebarConfig(basePath) {
  const addItem = [
    {
      title: '数组',
      path: '',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}

module.exports = {
  genVueSidebarConfig,
  genESSidebarConfig,
  genDataStructureSidebarConfig
}