var express = require('express');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'src/assets/images/');
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg'|| file.mimetype === 'image/png'){
        cb(null,true);
        
    }else{

        cb(new Error("Only Jpeg or PNG image type"),false);
    }
}

const upload = multer({storage: storage, fileFilter:fileFilter});

// var category = require('./categoryController');
// var category_lang = require('./category_langController');
var blogs = require("./blogsController");
var deleteBlog = require("./deleteBlogController");
var readBlog = require("./readBlogController");
var createBlog = require("./createBlogController");
var editBlog = require("./editBlogController");

router.get("/blogs",blogs.getBlogs);
router.delete("/delete/:id",deleteBlog.deleteBlog);
router.get("/read/:id",readBlog.readBlog);

router.post("/create",upload.single('image'),createBlog.createBlog);

router.patch("/edit",upload.single('image'),editBlog.editBlog);

// router.get('/category',category.getCategories);
// router.get('/category/:lang',category_lang.getCategories);


module.exports = router;