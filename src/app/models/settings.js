module.exports = app => {
  const { STRING, TEXT, INTEGER } = app.$Sequelize

  return app.$model.define('settings', {
    id: {
      type: INTEGER(3),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID'
    },
    title: {
      type: STRING(200),
      allowNull: false,
      comment: '标题'
    },
    keywords: {
      type: STRING(200),
      comment: '关键词'
    },
    description: {
      type: TEXT('tiny'),
      comment: '描述'
    },
    telephone: {
      type: STRING(50),
      comment: '手机号'
    },
    cellphone: {
      type: STRING(50),
      comment: '固定电话'
    },
    email: {
      type: STRING(100),
      comment: '邮箱'
    },
    copyright: {
      type: STRING(200),
      comment: '版权'
    },
    icp: {
      type: STRING(200),
      comment: '备案号'
    },
    address: {
      type: STRING(200),
      comment: '地址'
    },
    postcode: {
      type: STRING(50),
      comment: '邮编'
    },
    oa_qrcode: {
      type: INTEGER(10).UNSIGNED,
      comment: '公众号二维码'
    },
    app_qrcode: {
      type: INTEGER(10).UNSIGNED,
      comment: 'App 二维码'
    }
  })
}
