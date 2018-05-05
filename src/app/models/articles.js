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
      type: INTEGER(6).UNSIGNED,
      allowNull: true
    },
    author: {
      type: STRING(50),
      allowNull: true
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    subtitle: {
      type: STRING(200),
      allowNull: true
    },
    description: {
      type: TEXT('tiny'),
      allowNull: true
    },
    content: {
      type: TEXT('long'),
      allowNull: true
    },
    pictures: {
      type: STRING(200),
      allowNull: true
    },
    order: {
      type: INTEGER(10).UNSIGNED,
      allowNull: true
    }
  })
}
