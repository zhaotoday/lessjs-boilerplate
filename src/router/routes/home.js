module.exports = (app, router) => {
  router.get('/', app.$controllers.home.index)
}
