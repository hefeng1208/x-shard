const { changeBasePath } = require('../utils/helper')

function genVueSidebarConfig(basePath) {
  const addItem = [
    {
      title: 'Reactive 实现',
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

module.exports = {
  genVueSidebarConfig,
  genESSidebarConfig
}