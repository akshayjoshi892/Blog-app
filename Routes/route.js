const userAuth = require("./authRoute");
const router = require("express").Router();
const articleRoute = require("../Routes/articleRoute");
const base = "/api/v1";

router.use(`${base}/auth`, userAuth);

router.use(`${base}/articles`, articleRoute);
module.exports = router;
