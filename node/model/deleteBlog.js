var db =require('../db/index');
var deleteBlog = function(){};

deleteBlog.deleteBlog = function(id,cb){
    db.getconn(function(err,conn){
        conn.query("update blogs set deleted = 1 where blog_id=?",[id],function(err,result){
            cb(err,result);
        });
    });
}

module.exports = deleteBlog;