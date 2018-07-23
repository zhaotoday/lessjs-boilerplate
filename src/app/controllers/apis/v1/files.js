const fs = require('fs')
const dayjs = require('dayjs')

module.exports = app => {
  const service = app.$services.files

  return class extends app.$Controller {
    /**
     * 上传文件
     * @param {Object} ctx 上下文
     * @returns {Promise}
     */
    async post (ctx) {
      const { name, path, type, size } = ctx.request.body.files.file
      const uuid = app.$module('utils/uuid')(app)
      const date = dayjs().format('YYYY-MM-DD')
      const reader = fs.createReadStream(path)
      const ext = name.split('.').pop()
      const saveDir = `${app.$consts.DIRS.PUBLIC}/files/${date}`
      const saveName = `${uuid}.${ext}`

      !fs.existsSync(saveDir) && fs.mkdirSync(saveDir)

      const writeStream = fs.createWriteStream(`${saveDir}/${saveName}`)

      // 可读流通过管道写入可写流
      reader.pipe(writeStream)

      ctx.send({
        status: 201,
        data: await service.create({
          body: { title: name, type, ext, size, uuid, dir: date }
        })
      })
    }

    /**
     * 获取文件
     * @param {Object} ctx 上下文
     * @returns {Promise}
     */
    async get (ctx) {
      const item = await service.find({ id: ctx.params.id })

      ctx.response.redirect(`http://localhost:3002/files/${item.dir}/${item.uuid}.${item.ext}`)
    }
  }
}
