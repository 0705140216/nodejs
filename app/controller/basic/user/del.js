const {
  exec
} = require('../../../db/mysql')

//删除用户接口
const userDel = (id) => {
  const sql = `DELETE from tb_user where id="${id}"`
  return exec(sql).then(result => {
    return result.affectedRows > 0
  })
}

module.exports = {
  userDel
}