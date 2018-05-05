module.exports = app => {
  const {STRING, TEXT, INTEGER, FLOAT} = app.$Sequelize

  return app.$model.define('managers', {
    id: SHORT_ID,
    username: USERNAME,
    password: PASSWORD,
    rank: RANK,
    status: {
      type: INTEGER(1),
      isIn: [[0, 1]],
      allowNull: true
    }
  })
}
