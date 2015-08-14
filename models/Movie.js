/**
 * Created by Ivan on 2015/6/15.
 */
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
    name : String,
    alias: [String],
    publisher: Date,
    create_data :{type: Date, default: Date.now},
    images: {
        coverSmall:String,
        coverBig: String
    },
    source:[{
        source:String,
        link:String,
        swfLink:String,
        quality:String,
        version:String,
        lang:String,
        subtitle:String,
        create_date:{type:Date,default:Date.now}
    }]
});
var Movie = mongodb.mongoose.model("Movie",MovieSchema);
var MovieDAO = function(){};
MovieDAO.prototype.save = function(obj, callback) {
    var instance = new Movie(obj);
    instance.save(function(err){
        callback(err);
    });
};

//var dao = new MovieDAO();
//dao.save({name:"Jobs",alias:["qwe","sdf"]},function(info){
//    console.log(info);
//});
module.exports = new MovieDAO();