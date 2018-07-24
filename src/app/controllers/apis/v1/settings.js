module.exports = app => {
  return class extends app.$Controller {
    constructor () {
      super()

      this.service = app.$services.settings
      this.addMethods(['get', 'post', 'put', 'del'])
    }
  }
}
