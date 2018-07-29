module.exports = (app, router) => {
  router.get('/m/categories', app.$controllers.categories.index)
}
