module.exports = (app, router) => {
  app.$resources(router, '/apis/v1/categories', app.$controllers.apis.v1.categories)
}
