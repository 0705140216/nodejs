var express = require('express')
var router = express.Router()
const {
  SuccessModel,
  ErrorModel
} = require('../../../model/resModel.js')

const {
  userDel
} = require('../../../controller/basic/user/del')

/* 1登录接口查询名字是否存在数据库,2 判断注册还是登陆 3校验密码是否正确 */
router.get('/', function (req, res) {
  let {
    id
  } = req.query
  userDel(id).then(result => {
    result ? res.send(new SuccessModel('删除成功', result)) : res.send(new SuccessModel('删除失败', result))
  })
})

module.exports = router