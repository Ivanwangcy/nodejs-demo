/**
 * Created by Ivan on 2015/6/15.
 */
var mongoose = require("mongoose");
//指定Mongo的数据库名为nodejs
mongoose.connect("mongodb://localhost/nodejs");
console.log(mongoose);
exports.mongoose = mongoose;

//var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/my_database');
