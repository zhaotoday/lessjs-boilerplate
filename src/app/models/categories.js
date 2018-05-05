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
      type: INTEGER(6).UNSIGNED,
      allowNull: true
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    description: {
      type: TEXT('tiny'),
      allowNull: true
    },
    order: {
      type: INTEGER(6).UNSIGNED,
      allowNull: true
    },
    module: {
      type: STRING(50),
      allowNull: true
    }
  })
}
