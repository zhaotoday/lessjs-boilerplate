module.exports = app => {
  app.use(async (ctx, next) => {
    const req = ctx.request

    if (ctx.isPhone) {
      console.log(req)
      await next()
      // ctx.response.redirect('https://www.baidu.com/')
    } else {
      await next()
    }
  })
}
