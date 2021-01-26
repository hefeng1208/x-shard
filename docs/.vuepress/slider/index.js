const { changeBasePath } = require('../utils/helper')

function genVue3SidebarConfig(basePath) {
  const addItem = [
    {
      title: 'Reactive 实现原理',
      path: 'vue-reactive',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}
function genVue2SidebarConfig(basePath) {
  const addItem = [
    {
      title: 'vuex',
      path: 'Vuex',
      collapsable: true,
    },
    {
      title: 'vue-router',
      path: 'VueRouter',
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
      title: '二叉搜索树',
      path: 'binarySearchTree',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}
function genNodeSidebarConfig(basePath) {
  const addItem = [
    {
      title: 'EggJS 学习',
      path: 'eggjs',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}
function genELSidebarConfig(basePath) {
  const addItem = [
    {
      title: '浏览器EventLoop',
      path: 'Browser',
      collapsable: true,
    },
    {
      title: 'Node EventLoop',
      path: 'Node',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}
function genTSSidebarConfig(basePath) {
  const addItem = [
    {
      title: 'Node EventLoop',
      path: 'Node',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}
function genWPSidebarConfig(basePath) {
  const addItem = [
    {
      title: '配置',
      path: 'config',
      collapsable: true,
    },
    {
      title: 'Loader',
      path: 'loader',
      collapsable: true,
    },
    {
      title: '插件',
      path: 'config',
      collapsable: true,
    },
    {
      title: '源码分析',
      path: 'source',
      collapsable: true,
    }
  ]
  return changeBasePath(addItem, basePath)
}

module.exports = {
  genVue3SidebarConfig,
  genVue2SidebarConfig,
  genESSidebarConfig,
  genWPSidebarConfig,
  genELSidebarConfig,
  genNodeSidebarConfig,
  genDataStructureSidebarConfig
}