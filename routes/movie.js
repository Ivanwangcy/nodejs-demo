/**
 * Created by Ivan on 2015/6/15.
 */
var express = require('express');
var movie = express.Router();

var Movie = require('./../models/Movie.js');
console.log("Movie" + Movie);
movie.get('/add', function(req, res, next) {
    if(req.params.name){//update
        return res.render('movie', {
            title: req.params.name + '电影|管理|moive.me',
            label:'编辑电影:' + req.params.name,
            movie:req.params.name});
    }else{
        return res.render('movie', {
            title: '电影|管理|moive.me',
            label:'编辑电影' ,
            movie:false});
    }
});

//movie.get('/add',function(req, res, next){
//    res.render('movie', {title: "add"});
//});


movie.get('/',function(req, res, next){
    res.send('respond with a resource movie');
});

module.exports = movie;