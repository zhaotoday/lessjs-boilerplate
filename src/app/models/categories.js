module.exports = app => {
  const {STRING, TEXT, INTEGER, FLOAT} = app.$Sequelize

  return app.$model.define('categories', {
    id: SHORT_ID,
    parent_id: SHORT_RELATED_ID,
    title: TITLE,
    description: DESCRIPTION,
    order: SHORT_ORDER,
    module: MODULE
  })
}
