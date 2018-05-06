module.exports = app => {
  const {STRING, TEXT, INTEGER, FLOAT} = app.$Sequelize

  return app.$model.define('products', {
    id: {
      type: INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_id: {
      type: INTEGER(6).UNSIGNED
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    price: {
      type: FLOAT(10)
    },
    description: {
      type: TEXT('tiny')
    },
    content: {
      type: TEXT('long')
    },
    stock: {
      type: INTEGER(8)
    },
    unit: {
      type: STRING(50)
    },
    pictures: {
      type: STRING(200)
    }
  })
}
