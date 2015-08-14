var express = require('express');
var router = express.Router();

//创建express实例
//var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//login页面 与 登录提交
//app.route('/login')
//    .get(function(req, res, next){
//        res.render('login', {title: "用户登录"});
//    })
//    .post(function(req, res, next){
//        var user = {
//            username : 'admin',
//            password: 'admin'
//         };
//        if(req.body.username === user.username
//            && req.body.password === user.password){
//            res.redirect('/home');
//        }
//        res.redirect('/login');
//    });

router.get('/login',function(req, res, next){
    res.render('login', {title: "用户登录"});
});



router.post('/login',function(req, res, next){
    var user = {
        username : 'admin',
        password: 'admin'
    };
    if(req.body.username === user.username
        && req.body.password === user.password){
        res.redirect('/home');
    }
    res.redirect('/login');
});

//主页
router.get('/home',function(req, res, next){
    var user = {
        username: 'admin',
        password: 'admin'
    };
    res.render('home', {title: "Home", user:user});
});

//退出
router.get('/logout',function(req, res, next){
    res.redirect('/');
});

module.exports = router;
