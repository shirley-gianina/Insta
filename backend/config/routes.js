const router = require("express").Router();
const postsController = require("../controllers/Posts.controller")

router.get("/posts", postsController.Posts)

module.exports = router;