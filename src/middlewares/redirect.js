module.exports = app => {
  app.use(async (ctx, next) => {
    const { url } = ctx.request

    if (ctx.isPhone) {
      if (url.indexOf('/m/') === -1 && url !== '/m') {
        ctx.response.redirect(`/m${url}`)
      } else {
        await next()
      }
    } else {
      console.log(url)
      if (url.indexOf('/m/') !== -1) {
        ctx.response.redirect(url.replace('m/', ''))
      } else if (url === '/m') {
        ctx.response.redirect(url.replace('m', ''))
      } else {
        await next()
      }
    }
  })
}
