module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData(ctx)

      await ctx.render((ctx.isPhone ? 'mobile/' : '') + 'home', {
        $: {
          ...globalData,
          head: { title, keywords, description },
          homeAds: await app.$services.articles.find({
            where: { is_home_ad: 1 }
          }),
          categoryTops: await app.$services.articles.find({
            where: { is_category_top: 1 }
          })
        }
      })
    }
  }
}
