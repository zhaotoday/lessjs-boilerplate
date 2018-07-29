module.exports = (app, router) => {
  router.get('/news/:id?', app.$controllers.news.index)
}
