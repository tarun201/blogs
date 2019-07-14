var deleteBlogController = function () { };
var deleteBlogModel = require("../model/deleteBlog");

deleteBlogController.deleteBlog = function (req, res) {
    var id = req.params.id
    deleteBlogModel.deleteBlog(id, function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.status(200).json({
                message: "Blog deleted"
            });
        }

    });
};

module.exports = deleteBlogController;