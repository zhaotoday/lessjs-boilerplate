module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData(ctx)
      const alias = ctx.query.a || ''

      const data = {
        $: {
          ...globalData,
          head: { title, keywords, description },
          route: `categories/${alias}`,
          homeAds: await app.$services.articles.find({
            where: { is_home_ad: 1 }
          }),
          categories: await app.$services.categories.find({
            where: { alias },
            offset: 0,
            limit: 1000
          }),
          categoryTops: await app.$services.articles.find({
            where: {
              alias,
              is_category_top: 1
            }
          })
        }
      }

      await ctx.render((ctx.isMobile ? 'mobile/' : '') + 'categories', data)
    }
  }
}
