const router = require("express").Router();
const articleController = require("../Controllers/articleController");
const verifyAdmin = require("../Middleware/verifyToken");

router.post("/create", articleController.createArticle);
router.get("/get-articles", articleController.displayArticle);
router.get("/pending-articles", articleController.displayPendingArticles);
router.post("/approve-articles", verifyAdmin, articleController.approveArticle);
module.exports = router;
