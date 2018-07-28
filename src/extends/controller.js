module.exports = (app, Controller) => {
  return class extends Controller {
    getSettings () {
      return app.$services.settings.find({ id: 1 })
    }

    async getGlobalData () {
      const { BASE_URL, CDN, PAGE_SIZE } = app.$consts
      const time = require('less.js/src/utils/time')
      const cut = require('less.js/src/utils/cut')

      return {
        helpers: app.$helpers,
        utils: { time, cut },
        consts: { BASE_URL, CDN, PAGE_SIZE },
        settings: await this.getSettings()
      }
    }
  }
}
