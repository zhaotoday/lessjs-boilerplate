module.exports = app => {
  const {STRING, TEXT, INTEGER, FLOAT} = app.$Sequelize

  return app.$model.define('articles', {
    id: ID,
    category_id: SHORT_RELATED_ID,
    author: NAME,
    title: TITLE,
    subtitle: SUBTITLE,
    description: DESCRIPTION,
    content: CONTENT,
    pictures: PICTURES,
    order: ORDER
  })
}
