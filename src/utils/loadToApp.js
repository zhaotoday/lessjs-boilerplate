const consts = require('./consts')
const path = require('path')
const fs = require('fs')

module.exports = app => {
  // 递归
  function recurrence (rule, dir) {
    const target = {}

    fs.readdirSync(dir).forEach(file => {
      const extname = path.extname(file)
      const basename = path.basename(file, extname)

      if (extname === '.js') {
        // model 是一个类的实例，与 Service、Controller 分开处理
        target[basename] = rule.name === app.$consts.DIRS.MODELS
          ? require(path.join(dir, file))(app)
          : new (require(path.join(dir, file))(app))()
      } else {
        target[basename] = recurrence(rule, path.join(dir, file))
      }
    })

    return target
  }

  // 挂载 consts 到 app
  app.$consts = consts

  // 挂载 helpers 到 app
  app.$helpers = require('./helpers')(app)

  // 挂载 resources 到 app
  app.$resources = require('./resources')

  // 挂载 Sequelize 到 app
  app.$Sequelize = require('sequelize')

  // 挂载 Sequelize 实例 model 到 app
  app.$model = require('../core/model')(app)
  app.$model.columns = require('./columns')(app)

  // 挂载基类 Service、Controller 到 app
  app.$Service = require('../core/service')(app)
  app.$Controller = require('../core/constroller')(app)

  // 挂载业务级 model、service、controller 到 app.$models、app.$services、app.$controllers
  app.$consts.REGISTER_RULES.forEach(rule => {
    app[`$${rule.name}`] = recurrence(rule, rule.dir)
  })
}
