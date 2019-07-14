var db =require('../db/index');
var editBlog = function(){};

editBlog.editBlog = function(title,desc,image,id,cb){
    db.getconn(function(err,conn){
        conn.query("update blogs set title=?,description=?,image=?,updated_at=current_timestamp where blog_id=?",[title,desc,image,id],function(err,result){
            cb(err,result);
        });
    });
}

module.exports = editBlog;