function changeBasePath(articles, basePath) {
  if (!Array.isArray(articles)) {
    return []
  }
  if (articles.children) {
    changeBasePath(articles.children, basePath)
  }
  return articles.map(item => ({...item, path: `${basePath}${item.path || ''}`}) )
}

module.exports = {
  changeBasePath
}