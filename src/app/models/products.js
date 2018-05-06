module.exports = app => {
  const {STRING, TEXT, INTEGER, FLOAT} = app.$Sequelize

  return app.$model.define('products', {
    id: {
      type: INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID'
    },
    category_id: {
      type: INTEGER(6).UNSIGNED,
      comment: '栏目 ID'
    },
    title: {
      type: STRING(200),
      allowNull: false,
      comment: '标题'
    },
    price: {
      type: FLOAT(10),
      comment: '价格'
    },
    description: {
      type: TEXT('tiny'),
      comment: '描述'
    },
    content: {
      type: TEXT('long'),
      comment: '内容'
    },
    stock: {
      type: INTEGER(8),
      comment: '库存'
    },
    unit: {
      type: STRING(50),
      comment: '单位'
    },
    pictures: {
      type: STRING(200),
      comment: '图片'
    }
  })
}
