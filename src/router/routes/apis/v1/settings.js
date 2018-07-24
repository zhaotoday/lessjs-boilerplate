module.exports = (app, router) => {
  app.$resources(router, '/apis/v1/settings', app.$controllers.apis.v1.settings)
}
