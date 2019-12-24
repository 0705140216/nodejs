const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const ejs = require('ejs')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()
// var login = require('./routes/login/login');
// var user = require('./routes/user/user');
// app.use('/login', login);
// app.use('/user', user);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views')) //定义模板（views ）搜索路径，在根目录的 views 文件夹下,可自定义
app.engine('html', ejs.__express)
app.set('view engine', 'html') //设置模板引擎 为： EJS, 可自定义

app.use(logger('dev'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

require('./libs/boot')(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'dev' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
