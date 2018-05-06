module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.$Sequelize

  return app.$model.define('categories', {
    id: {
      type: INTEGER(6).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    parent_id: {
      type: INTEGER(6).UNSIGNED
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    description: {
      type: TEXT('tiny')
    },
    order: {
      type: INTEGER(6).UNSIGNED
    },
    module: {
      type: STRING(50)
    }
  })
}
