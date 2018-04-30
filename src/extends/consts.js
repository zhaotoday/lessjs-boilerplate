// 监听端口
const PORT = 3001

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
  expiresIn: '5h'
}

module.exports = app => {
  return {
    PORT,
    DB,
    REDIS,
    JWT
  }
}
