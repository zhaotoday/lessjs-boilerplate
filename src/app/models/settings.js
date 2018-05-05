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
      type: STRING(200),
      allowNull: true
    },
    description: {
      type: TEXT('tiny'),
      allowNull: true
    },
    telephone: {
      type: STRING(50),
      allowNull: true
    },
    cellphone: {
      type: STRING(50),
      allowNull: true
    },
    email: {
      type: STRING(100),
      allowNull: true
    },
    address: {
      type: STRING(200),
      allowNull: true
    },
    postcode: {
      type: STRING(50),
      allowNull: true
    }
  })
}
