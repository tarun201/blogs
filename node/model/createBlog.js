var db =require('../db/index');
var createBlog = function(){};

createBlog.createBlog = function(title,desc,image,cb){
    db.getconn(function(err,conn){
        conn.query("insert into blogs(title,description,image) values(?,?,?)",[title,desc,image],function(err,result){
            cb(err,result);
        });
    });
}

module.exports = createBlog;