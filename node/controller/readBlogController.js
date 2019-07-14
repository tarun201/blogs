var readBlogController = function(){};
var readBlogModel = require("../model/readBlog");

readBlogController.readBlog = function(req,res){
    var id = req.params.id
    readBlogModel.readBlog(id,function(err,data){
        res.json(data);
    });
};

module.exports = readBlogController;