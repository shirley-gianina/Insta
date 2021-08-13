const Post = require("../models/Post.model")


module.exports.Posts = async (req, res, next) => { 
    const dataPosts = await Post.find().exec()
    res.send(dataPosts)
}


