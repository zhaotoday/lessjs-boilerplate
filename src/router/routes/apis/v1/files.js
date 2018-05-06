module.exports = (app, router) => {
  app.$resources(router, '/apis/v1/files', app.$controllers.apis.v1.files)
}
