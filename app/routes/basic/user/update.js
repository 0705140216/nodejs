var express = require('express')
var router = express.Router()

const {
  SuccessModel,
  ErrorModel
} = require('../../../model/resModel.js')
const {
  userUpdate
} = require('../../../controller/basic/user/update')


/* 1登录接口查询名字是否存在数据库,2 判断注册还是登陆 3校验密码是否正确 */
router.post('/', function (req, res) {
  let {
    id,
    account,
    pwd
  } = req.body
  userUpdate(id, account, pwd).then(resultUpdate => {
    resultUpdate ? res.send(new SuccessModel('更新成功')) : res.send(new ErrorModel('更新失败'))
  })
})

module.exports = router