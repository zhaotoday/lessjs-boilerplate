module.exports = (app, router) => {
  router.get('/m', app.$controllers.home.index)
}
