const dataPosts = require("../data/posts.json")

module.exports.Posts = (req, res, next) => {
    res.send(dataPosts)
}


