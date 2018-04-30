const app = require('less.js')

app.listen(app.$consts.PORT, () => {
  console.log(`server is running at http://localhost:${app.$consts.PORT}`)
})
