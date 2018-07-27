const router = require('koa-router')()

module.exports = app => {
  require('./routes/home')(app, router)
  require('./routes/news')(app, router)

  require('./routes/apis/v1/articles')(app, router)
  require('./routes/apis/v1/categories')(app, router)
  require('./routes/apis/v1/settings')(app, router)
  require('./routes/apis/v1/managers')(app, router)
  require('./routes/apis/v1/files')(app, router)
  require('./routes/apis/v1/actions/login')(app, router)

  app.use(router.routes()).use(router.allowedMethods())
}
