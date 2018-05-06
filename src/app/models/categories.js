module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.$Sequelize

  return app.$model.define('categories', {
    id: {
      type: INTEGER(6).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID'
    },
    parent_id: {
      type: INTEGER(6).UNSIGNED,
      comment: '上级 ID'
    },
    title: {
      type: STRING(200),
      allowNull: false,
      comment: '标题'
    },
    description: {
      type: TEXT('tiny'),
      comment: '描述'
    },
    order: {
      type: INTEGER(6).UNSIGNED,
      comment: '次序'
    },
    module: {
      type: STRING(50),
      comment: '模块'
    }
  })
}
