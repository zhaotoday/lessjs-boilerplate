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
      type: INTEGER(6).UNSIGNED,
      allowNull: true
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    price: {
      type: FLOAT(10),
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
    stock: {
      type: INTEGER(8),
      allowNull: true
    },
    unit: {
      type: STRING(50),
      allowNull: true
    },
    pictures: {
      type: STRING(200),
      allowNull: true
    }
  })
}
