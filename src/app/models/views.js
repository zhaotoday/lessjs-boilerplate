module.exports = app => {
  const { STRING, INTEGER } = app.$Sequelize

  return app.$model.define('views', {
    id: {
      type: INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID'
    },
    resource_id: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: '资源 ID'
    },
    count: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: '访问数量'
    },
    resource_module: {
      type: STRING(50),
      comment: '模块'
    }
  })
}
