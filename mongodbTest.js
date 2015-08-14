/**
 * Created by Ivan on 2015/6/29.
 */
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_database');
console.log(mongoose);
//    Db = Mongodb.Db,
//    Connection = Mongodb.Connection,
//    Server = Mongodb.Server;
//
//var mongo = new Db("testDb", new Server('localhost',99991),{safe:true});
//
//mongo.open(function(err, db){
//    db.collection("test_table", function(err, collection){
//        collection.save({name:'Test 01'},{safe:true},function(err, app){
//            mongo.close();
//            console.log(app);
//        });
//    });
//});