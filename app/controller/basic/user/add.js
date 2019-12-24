const {
  exec
} = require('../../../db/mysql')

//新增用户名
const userAdd = (account, pwd) => {
  const sql = `INSERT INTO tb_user(account,pwd) VALUES ('${account}','${pwd}')`
  return exec(sql).then(result => {
    return result.affectedRows > 0
  })
}

module.exports = {
  userAdd
}