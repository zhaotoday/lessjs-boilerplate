module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData(ctx)
      const alias = 'news'

      await ctx.render((ctx.isMobile ? 'mobile/' : '') + 'home', {
        $: {
          ...globalData,
          head: { title, keywords, description },
          route: 'home',
          alias,
          homeAds: await app.$services.articles.find({
            where: { is_home_ad: 1 }
          }),
          categoryTops: await app.$services.articles.find({
            where: {
              alias,
              is_category_top: 1
            }
          })
        }
      })
    }
  }
}
