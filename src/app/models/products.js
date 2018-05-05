module.exports = app => {
  const {STRING, TEXT, INTEGER, FLOAT} = app.$Sequelize

  return app.$model.define('products', {
    id: ID,
    category_id: SHORT_RELATED_ID,
    title: TITLE,
    price: PRICE,
    description: DESCRIPTION,
    content: CONTENT,
    stock: STOCK,
    unit: UNIT,
    pictures: PICTURES
  })
}
