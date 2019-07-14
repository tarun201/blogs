var multer = require('multer');

var editBlogController = function () { };
var editBlogModel = require("../model/editBlog");

editBlogController.editBlog = function (req, res) {
    const title = req.body.title;
    const image = req.file.originalname;
    const desc = req.body.description;
    const id = req.body.blog_id;

    editBlogModel.editBlog(title, desc, image, id, function (err, data) {
        if (err) {
            res.json(err);
        }else{
            res.status(201).json({
                message: "Blog edited",
            });
        }
    });
}

module.exports = editBlogController;