const { create, find } = require("../../database/mongoService");

exports.createBlog = async (req, res) => {
    try {
        const { title, tags, slug, url } = req.body;
        const userId = req.user.userId;
        const addBlog = await create({
            model: "BlogSchema",
            data: {
                userId,
                title,
                tags,
                slug,
                url
            }
        });
        if (addBlog) {
            return res.send({
                "success": true,
                "message": "Blog Added success"
            });
        } else {
            return res.send({
                "success": false,
                "message": "Something went wrong while adding blog"
            });
        }
    } catch (err) {
        console.log(`Error in createBlog ::: ${err}`)
        return res.send({
            "success": false,
            "message": "Catch Error"
        });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        let allBlogs = await find({
            model: "BlogSchema"
        });
        if (allBlogs) {
            return res.send({
                "success": true,
                "data": allBlogs,
                "message": "Blogs fetched success"
            });
        } else {
            return res.send({
                "success": false,
                "message": "Something went wrong while fetching blog"
            });
        }
    } catch (err) {
        console.log(`Error in getAllBlogs ::: ${err}`)
        return res.send({
            "success": false,
            "message": "Catch Error"
        });
    }
};