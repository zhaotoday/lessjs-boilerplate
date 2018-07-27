module.exports = app => {
  return {
    getFileURL (id) {
      return `${app.$consts.BASE_URL}/apis/v1/files/${id}`
    }
  }
}
