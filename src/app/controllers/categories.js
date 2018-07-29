module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData()

      const data = {
        $: {
          ...globalData,
          head: { title, keywords, description },
          categories: await app.$services.categories.find({ offset: 0, limit: 1000 }),
          categoryTops: await app.$services.articles.find({
            where: { is_category_top: 1 }
          })
        }
      }

      await ctx.render('categories', data)
    }
  }
}