module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.$Sequelize

  return app.$model.define('articles', {
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
    author: {
      type: STRING(50),
      comment: '作者'
    },
    title: {
      type: STRING(200),
      allowNull: false,
      comment: '标题'
    },
    subtitle: {
      type: STRING(200),
      comment: '副标题'
    },
    description: {
      type: TEXT('tiny'),
      comment: '描述'
    },
    content: {
      type: TEXT('long'),
      comment: '内容'
    },
    pictures: {
      type: STRING(200),
      comment: '图片'
    },
    order: {
      type: INTEGER(10).UNSIGNED,
      comment: '次序'
    }
  })
}
