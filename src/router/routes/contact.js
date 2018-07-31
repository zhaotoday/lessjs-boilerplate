module.exports = (app, router) => {
  router.get('/contact/:id?', app.$controllers.articles.contact)
}
