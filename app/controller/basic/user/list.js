const {
  exec
} = require('../../../db/mysql')

//用户列表
const userList = () => {
  const sql = `select * from tb_user`
  return exec(sql).then(rows => {
    return rows || []
  })
}

module.exports = {
  userList
}