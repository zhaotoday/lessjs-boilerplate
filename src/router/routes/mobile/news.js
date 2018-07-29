module.exports = (app, router) => {
  router.get('/m/news/:id?', app.$controllers.news.index)
}
