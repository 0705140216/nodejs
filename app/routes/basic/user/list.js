var express = require('express')
var router = express.Router()
const {
  SuccessModel,
  ErrorModel
} = require('../../../model/resModel.js')

const {
  userList
} = require('../../../controller/basic/user/list')

/* 1登录接口查询名字是否存在数据库,2 判断注册还是登陆 3校验密码是否正确 */
router.get('/', function (req, res) {
  userList().then(result => {
    res.send(new SuccessModel('操作成功', result))
  })
})

module.exports = router