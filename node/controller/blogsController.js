var blogsController = function(){};
var blogsModel = require('../model/blogs.js');

blogsController.getBlogs = function(req,res){
	blogsModel.getBlogs(function(err,data){
		res.json(data);
	});
};

module.exports = blogsController;