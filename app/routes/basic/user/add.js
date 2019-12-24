var express = require('express')
var router = express.Router()

const {
  SuccessModel,
  ErrorModel
} = require('../../../model/resModel.js')
const {
  userAdd
} = require('../../../controller/basic/user/add')

const {
  loginAccount
} = require('../../../controller/auth/login/login')

/* 1登录接口查询名字是否存在数据库,2 判断注册还是登陆 3校验密码是否正确 */
router.post('/', function (req, res) {
  let {
    account,
    pwd
  } = req.body
  loginAccount(account).then(resultAccount => {
    // console.log('注册校验===>' + resultAccount)
    if (!resultAccount) { //判断是否存在用户名  存在  目的注册
      userAdd(account, pwd).then(resultAdd => {
        resultAdd ? res.send(new SuccessModel('注册成功')) : res.send(new ErrorModel('注册失败'))
      })
    } else { //不存在用户名
      res.send(new ErrorModel('对不起,账号已经名草有主了'))
    }
  })

})

module.exports = router