module.exports = app => {
  return class extends app.$Controller {
    constructor () {
      super()

      this.service = app.$services.views
    }

    async get (ctx) {
      if (!(await this._get(ctx)).length) {
        await this._post(ctx)
      } else {
        await this._put(ctx, await this._get(ctx))
      }

      ctx.send({
        status: 200,
        data: (await this._get(ctx))[0]
      })
    }

    async _get (ctx) {
      const { resource_id, resource_module } = ctx.query

      return this.service.find({
        where: {
          resource_id,
          resource_module
        }
      })
    }

    async _post (ctx) {
      const { resource_id, resource_module } = ctx.query

      return this.service.create({
        body: {
          resource_id,
          resource_module,
          count: 1
        }
      })
    }

    async _put (ctx, res) {
      await this.service.update({
        id: res[0].id,
        body: {
          count: res[0].count + 1
        }
      })
    }
  }
}
