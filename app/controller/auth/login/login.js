const {
  exec
} = require('../../../db/mysql')

//校验用户名
const loginAccount = (account) => {
  const sql = `select * from tb_user where account='${account}'`
  return exec(sql).then(rows => {
    console.log(rows.affectedRows)
    if (rows && rows.length) {
      return true
    }
    return false
  })
}

//校验用户名密码是否匹配
const loginPwd = (account, pwd) => {
  const sql = `select * from tb_user where account='${account}' and pwd='${pwd}'`
  return exec(sql).then(rows => {
    if (rows && rows.length) {
      return true
    }
    return false
  })
}
module.exports = {
  loginAccount,
  loginPwd
}