module.exports = app => {
  const service = app.$services.articles

  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData()

      const data = {
        $: {
          ...globalData,
          head: { title, keywords, description },
          items: await service.find({ offset: 0, limit: 10 })
        }
      }

      await ctx.render('articles', data)
    }
  }
}
