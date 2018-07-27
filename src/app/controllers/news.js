module.exports = app => {
  return class extends app.$Controller {
    async index (ctx) {
      const { title, keywords, description } = await this.getSettings()
      const globalData = await this.getGlobalData()
      const id = ctx.params.id || ''

      let data

      if (id) {
        const details = await app.$services.articles.find({ id })

        data = {
          $: {
            ...globalData,
            head: { title, keywords, description },
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
        }
      } else {
        const { PAGE_SIZE } = app.$consts
        const categoryId = ctx.query.c || 0
        const page = ctx.query.p || 1
        const where = categoryId ? { category_id: categoryId } : null

        data = {
          $: {
            ...globalData,
            head: { title, keywords, description },
            category: categoryId ? await app.$services.categories.find({ id: categoryId }) : null,
            // TODO: limit = -1 表示无需分页
            categories: await app.$services.categories.find({ offset: 0, limit: 1000 }),
            count: await app.$services.articles.count({ where }),
            items: await app.$services.articles.find({ where, offset: (page - 1) * PAGE_SIZE, limit: PAGE_SIZE })
          }
        }
      }

      await ctx.render('home', data)
    }
  }
}
