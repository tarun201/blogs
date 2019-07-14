var db = require('../db/index');
var blogs = function(){};

// category.getCategories = function(cb){
// 	db.getconn(function(err,conn){
// 		conn.query("SELECT DISTINCT category as category,chash FROM sources",function(err,result){
// 		cb(err,result);
// 	});
// 	});
// };

blogs.getBlogs = function(cb){
    db.getconn(function(err,conn){
        conn.query("select * from blogs where deleted=0",function(err,result){
            cb(err,result);
        });
    });
}

module.exports = blogs;