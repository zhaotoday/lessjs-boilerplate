// 是否开发环境
const IS_DEV = process.env.NODE_ENV === 'development'

// 监听端口
const PORT = 3002

// 基础地址
const BASE_URL = IS_DEV ? `http://localhost:${PORT}` : 'https://www.rjwb.cn'

// 前端资源 CDN。开发环境下配置成网站构建工具 dev 时的地址
const CDN = IS_DEV ? `http://localhost:8083` : 'https://www.rjwb.cn'

const STATIC_VERSION = '0.1'

// 分页大小
const PAGE_SIZE = 5

// MySQL 数据库配置
const DB = {
  database: 'hzzww0n',
  username: 'hzzww0n_f',
  password: 'aaaaaa111111',
  options: {
    host: 'wvort936.669.dnstoo.com',
    port: 4024,
    dialect: 'mysql',
    define: {
      underscored: true
    }
  }
}

// Redis 配置
const REDIS = {}

// JWT 配置
const JWT = {
  secret: 'jwt_secret',
  expiresIn: '10d',
  unlessPath: [
    /^\/$/,
    /^\/m/,
    /^\/static/,
    /^\/news/,
    /^\/contact/,
    /^\/categories/,
    /\/views/,
    /\/login/,
    /\/files\/\d/
  ]
}

module.exports = app => {
  return {
    IS_DEV,
    PORT,
    BASE_URL,
    CDN,
    STATIC_VERSION,
    PAGE_SIZE,
    DB,
    REDIS,
    JWT
  }
}
