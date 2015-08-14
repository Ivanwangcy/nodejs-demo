//加载依赖库, 原来这个类库都封装在connect 中, 现在需要单独加载
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//加载路由控制
var routes = require('./routes/index');
var users = require('./routes/users');
var movie = require('./routes/movie');
//var SessionStore = require("session-mongoose")(express);
//console.log(movie);
//var SessionStore = require("mongoose")(express);
//console.log("SessionStore" + SessionStore);
//var store = new SessionStore({
//    url: "mongodb://localhost/session",
//    interval: 120000
//});
//console.log(store);
//创建项目实例
var app = express();

//定义 EJS 模板引擎和模板文件位置, 也可以使用 jade 或其他模型引擎
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//定义icon 图标
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//定义日志和输出级别
app.use(logger('dev'));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//定义cookie 解析器
app.use(cookieParser());
//定义静态文件目录  js 文件 css 文件 images 图标资源等
app.use(express.static(path.join(__dirname, 'public')));

//匹配路径和路由
app.use(['/','/login','/logout','/home'], routes);

app.use('/users', users);

//mongodb 匹配路径和路由
app.use('/movie', movie);
//app.use(['/movie/add','/movie/:name','/movie/json/:name'], movie);

//404错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//开发环境, 500错误处理和错误堆栈跟踪
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//生产环境, 500错误处理
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//增加路由配置
//app.use('/login', routes);
//app.get('/login', routes.login);
//app.post('/login', routes.doLogin);
//app.get(, routes.logout);
//app.get('/home', routes.home);


//输出模型app
module.exports = app;
