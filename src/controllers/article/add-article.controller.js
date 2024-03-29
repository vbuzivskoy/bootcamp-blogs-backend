const { CREATED } = require('http-status');

const { articleService } = require('../../services');

const addArticleController = async (req, res, next) => {
  const { title, description, text, tags } = req.body;

  try {
    const newArticleParams = {
      author: req.user,
      title,
      description,
      text,
      tags,
    };

    const articles = await articleService.addArticle(newArticleParams);

    res.status(CREATED).json(articles);
  } catch (error) {
    next(error);
  }
};

module.exports = { addArticleController };
