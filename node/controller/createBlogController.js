var multer = require('multer');

var createBlogController = function () { };
var createBlogModel = require("../model/createBlog");

createBlogController.createBlog = function (req, res) {
    const title=req.body.title;
    const image=req.file.originalname;
    const desc=req.body.description;
    
    createBlogModel.createBlog(title,desc,image,function(err,data){
        if(err){
            res.json(err);
        }else{
            res.status(201).json({
                message: "Blog created",
            });
        }
    });
}

module.exports = createBlogController;