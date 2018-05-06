module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.$Sequelize

  return app.$model.define('articles', {
    id: {
      type: INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_id: {
      type: INTEGER(6).UNSIGNED
    },
    author: {
      type: STRING(50)
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    subtitle: {
      type: STRING(200)
    },
    description: {
      type: TEXT('tiny')
    },
    content: {
      type: TEXT('long')
    },
    pictures: {
      type: STRING(200)
    },
    order: {
      type: INTEGER(10).UNSIGNED
    }
  })
}
