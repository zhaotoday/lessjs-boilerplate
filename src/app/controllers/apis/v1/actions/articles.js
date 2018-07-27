module.exports = app => {
  const model = app.$models.articles
  const service = app.$services.articles

  return class extends app.$Controller {
    async post (ctx) {
      const { type } = ctx.request.body

      switch (type) {
        case 'SET_HOME_AD':
          await this.setHomeAd(ctx)
          break
        case 'SET_CATEGORY_TOP':
          await this.setCategoryTop(ctx)
          break
        case 'CANCEL_HOME_AD':
          await this.cancelHomeAd(ctx)
          break
        case 'CANCEL_CATEGORY_TOP':
          await this.cancelCategoryTop(ctx)
          break
        default:
          break
      }
    }

    async setHomeAd (ctx) {
      const { id } = ctx.request.body

      await model.update({ is_home_ad: 1 }, {
        where: { id }
      })

      ctx.send({ status: 204 })
    }

    async cancelHomeAd (ctx) {
      const { id } = ctx.request.body

      await model.update({ is_home_ad: 0 }, {
        where: { id }
      })

      ctx.send({ status: 204 })
    }

    async setCategoryTop (ctx) {
      const { id } = ctx.request.body

      const findRes = await service.find({ id })

      await model.update({ is_category_top: 0 }, {
        where: {
          category_id: findRes.category_id,
          is_category_top: 1
        }
      })

      await model.update({ is_category_top: 1 }, {
        where: { id }
      })

      ctx.send({ status: 204 })
    }

    async cancelCategoryTop (ctx) {
      const { id } = ctx.request.body

      await model.update({ is_category_top: 0 }, {
        where: { id }
      })

      ctx.send({ status: 204 })
    }
  }
}
