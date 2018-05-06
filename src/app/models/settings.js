module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.$Sequelize

  return app.$model.define('settings', {
    id: {
      type: INTEGER(3),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    keywords: {
      type: STRING(200)
    },
    description: {
      type: TEXT('tiny')
    },
    telephone: {
      type: STRING(50)
    },
    cellphone: {
      type: STRING(50)
    },
    email: {
      type: STRING(100)
    },
    address: {
      type: STRING(200)
    },
    postcode: {
      type: STRING(50)
    }
  })
}
