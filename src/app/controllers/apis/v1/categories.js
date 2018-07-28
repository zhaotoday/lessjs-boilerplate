module.exports = app => {
  return class extends app.$Controller {
    constructor () {
      super()

      this.service = app.$services.categories
      this.addMethods(['post', 'put', 'del'])
    }

    async get (ctx) {
      if (ctx.params.id) {
        ctx.send({
          status: 200,
          data: await this.service.find({ id: ctx.params.id })
        })
      } else {
        const { offset, limit, where } = app.$helpers.formatQuery(ctx.request.query)

        ctx.send({
          status: 200,
          data: {
            total: await this.service.count({ where }),
            items: await this.service.find({ offset, limit, where, order: [['order', 'ASC']] })
          }
        })
      }
    }
  }
}
