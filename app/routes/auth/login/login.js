var express = require('express')
var router = express.Router()
const {
  SuccessModel,
  ErrorModel
} = require('../../../model/resModel.js')
const {
  loginAccount,
  loginPwd
} = require('../../../controller/auth/login/login')

/* 1登录接口查询名字是否存在数据库,2 判断注册还是登陆 3校验密码是否正确 */
router.post('/', function (req, res) {
  let {
    account,
    pwd,
    register
  } = req.body
  loginAccount(account).then(resultAccount => {
    if (resultAccount) { //判断是否存在用户名  存在  目的登陆
      loginPwd(account, pwd).then(resultPwd => {
        resultPwd ? res.send(new SuccessModel('登陆成功')) : res.send(new ErrorModel('用户名账号不匹配请重新输入'))
      })
    } else { //不存在用户名
      res.send(new ErrorModel('对不起,账号不存在无法登陆'))
    }
  })
})

module.exports = router