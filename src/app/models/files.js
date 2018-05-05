module.exports = app => {
  const {STRING, INTEGER} = app.$Sequelize

  return app.$model.define('files', {
    id: {
      type: INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    type: {
      type: STRING(50),
      allowNull: false
    },
    size: {
      type: STRING(50),
      allowNull: false
    },
    ext: {
      type: STRING(10),
      allowNull: false
    },
    module: {
      type: STRING(50),
      allowNull: true
    }
  })
}
