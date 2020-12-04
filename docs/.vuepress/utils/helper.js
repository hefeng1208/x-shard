function changeBasePath(articles, basePath) {
  if (!Array.isArray(articles)) {
    return []
  }
  return articles.map(item => ({...item, path: `${basePath}${item.path || ''}`}) )
}

module.exports = {
  changeBasePath
}