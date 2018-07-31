module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData(ctx)
      const id = ctx.params.id || ''

      if (id) {
        const details = await app.$services.articles.find({ id })
        const alias = details.alias
        const categories = await app.$services.categories.find({
          where: { alias: details.alias },
          offset: 0,
          limit: 1000
        })

        await ctx.render((ctx.isMobile ? 'mobile/' : '') + 'article-details', {
          $: {
            ...globalData,
            head: { title, keywords, description },
            route: `articles/${alias}`,
            alias,
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
        const alias = ctx.query.a || ''
        const categoryId = ctx.query.c || 0
        const page = +ctx.query.p || 1
        const where = categoryId
          ? { alias, category_id: categoryId }
          : { alias }
        // TODO: limit = -1 表示无需分页
        const categories = await app.$services.categories.find({
          where: { alias },
          offset: 0,
          limit: 1000
        })

        await ctx.render((ctx.isMobile ? 'mobile/' : '') + 'articles', {
          $: {
            ...globalData,
            head: { title, keywords, description },
            route: `articles/${alias}`,
            alias,
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
