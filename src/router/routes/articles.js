module.exports = (app, router) => {
  router.get('/articles/:id?', app.$controllers.articles.index)
}
