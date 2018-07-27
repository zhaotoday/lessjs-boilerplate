module.exports = (app, router) => {
  app.$resources(router, '/apis/v1/articles/actions', app.$controllers.apis.v1.actions.articles)
  app.$resources(router, '/apis/v1/articles', app.$controllers.apis.v1.articles)
}
