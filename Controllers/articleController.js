const Article = require("../Models/createArticle");
const jwt = require("jsonwebtoken");

const createArticle = async (req, res) => {
   console.log("creating...!");
   try {
      const newArticle = new Article({
         username: req.body.username,
         article_name: req.body.article_name,
         article_title: req.body.article_title,
         article_desc: req.body.article_desc,
      });

      await newArticle.save();
      res.status(200).json({
         message: "created article,requested to publish!",
         data: newArticle,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: "article creation failed",
         error: error,
      });
   }
};

const displayArticle = async (req, res) => {
   try {
      const articles = await Article.find({ publish: true });
      res.json(articles);
   } catch (err) {
      console.error("Error fetching articles:", err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

const displayPendingArticles = async (req, res) => {
   try {
      const articles = await Article.find({ publish: false });
      res.json(articles);
   } catch (err) {
      console.error("Error fetching articles:", err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

const approveArticle = async (req, res) => {
   try {
     
      const { articleId } = req.query;
      console.log("apr");
     true
      const updatedArticle = await Article.findByIdAndUpdate(
         articleId,
         { publish: true },
         { new: true } 
      );

      if (!updatedArticle) {
        
         return res.status(404).json({ message: "Article not found" });
      }

      
      res.json({ message: "Article approved successfully", updatedArticle });
   } catch (err) {
      console.error("Error approving article:", err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

module.exports = {
   displayArticle,
   createArticle,
   approveArticle,
   displayPendingArticles,
};
