module.exports = (app, Controller) => {
  return class extends Controller {
    getSettings () {
      return app.$services.settings.find({ id: 1 })
    }

    async getGlobalData () {
      return {
        helpers: {
          formatTime () {
            return 2222
          }
        },
        consts: {
          PAGE_SIZE: app.$consts.PAGE_SIZE,
          CDN: process.env.NODE_ENV === 'development' ? `http://localhost:${app.$consts.PORT}` : 'https://cdn.liruan.cn'
        },
        settings: await this.getSettings()
      }
    }
  }
}
