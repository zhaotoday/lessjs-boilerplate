module.exports = (app, router) => {
  app.$resources(router, '/apis/v1/views', app.$controllers.apis.v1.views)
}
