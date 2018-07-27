module.exports = app => {
  const { STRING, TEXT, INTEGER } = app.$Sequelize

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
    picture: {
      type: INTEGER(10).UNSIGNED,
      comment: '图片'
    },
    order: {
      type: INTEGER(10).UNSIGNED,
      comment: '次序'
    },
    is_home_ad: {
      type: INTEGER(1).UNSIGNED,
      defaultValue: 0,
      comment: '是否首页广告'
    },
    is_category_top: {
      type: INTEGER(1).UNSIGNED,
      defaultValue: 0,
      comment: '是否分类头条'
    }
  })
}
