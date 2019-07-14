var db =require('../db/index');
var readBlog = function(){};

readBlog.readBlog = function(id,cb){
    db.getconn(function(err,conn){
        conn.query("select * from blogs where blog_id=?",[id],function(err,result){
            cb(err,result);
        });
    });
}

module.exports = readBlog;