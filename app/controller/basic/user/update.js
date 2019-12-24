const {
  exec
} = require('../../../db/mysql')

//修改用户名密码
const userUpdate = (id, account, pwd) => {
  const sql = `UPDATE tb_user SET account="${account}",pwd="${pwd}" WHERE id=${id}`
  return exec(sql).then(result => {
    console.log(result)
    return result.affectedRows > 0
  })
}

module.exports = {
  userUpdate
}