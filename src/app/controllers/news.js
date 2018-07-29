module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData(ctx)
      // TODO: limit = -1 表示无需分页
      const categories = await app.$services.categories.find({ offset: 0, limit: 1000 })
      const id = ctx.params.id || ''

      if (id) {
        const details = await app.$services.articles.find({ id })

        await ctx.render((ctx.isMobile ? 'mobile/' : '') + 'news-details', {
          $: {
            ...globalData,
            head: { title, keywords, description },
            categories,
            details,
            prev: (await app.$services.articles.find({
              limit: 1,
              where: {
                id: { $lt: id }
              }
            }))[0] || null,
            next: (await app.$services.articles.find({
              limit: 1,
              where: {
                id: { $gt: id }
              },
              order: [['id', 'ASC']]
            }))[0] || null
          }
        })
      } else {
        const { PAGE_SIZE } = app.$consts
        const categoryId = ctx.query.c || 0
        const page = +ctx.query.p || 1
        const where = categoryId ? { category_id: categoryId } : null

        await ctx.render((ctx.isMobile ? 'mobile/' : '') + 'news', {
          $: {
            ...globalData,
            head: { title, keywords, description },
            categories,
            category: categoryId ? await app.$services.categories.find({ id: categoryId }) : null,
            count: await app.$services.articles.count({ where }),
            items: await app.$services.articles.find({ where, offset: (page - 1) * PAGE_SIZE, limit: PAGE_SIZE }),
            page
          }
        })
      }
    }
  }
}
