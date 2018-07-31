module.exports = (app, router) => {
  router.get('/m/articles/:id?', app.$controllers.articles.index)
}
