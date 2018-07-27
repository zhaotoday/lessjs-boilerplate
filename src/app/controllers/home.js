module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData()

      const data = {
        $: {
          ...globalData,
          head: { title, keywords, description },
          homeAds: await app.$services.articles.find({
            where: { is_home_ad: 1 }
          }),
          categoryTops: await app.$services.articles.find({
            where: { is_category_top: 1 }
          }),
          items: await app.$services.articles.find({ offset: 0, limit: 10 })
        }
      }

      await ctx.render('home', data)
    }
  }
}