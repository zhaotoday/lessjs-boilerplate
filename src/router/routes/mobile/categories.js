module.exports = (app, router) => {
  router.get('/categories', app.$controllers.categories.index)
}
