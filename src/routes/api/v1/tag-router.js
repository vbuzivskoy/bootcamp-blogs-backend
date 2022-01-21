const { Router } = require('express');

const { authMiddleware } = require('../../../middlewares');
const {
  findTags,
  addTag,
  getTagByFullNameController,
} = require('../../../controllers/tag');

const tagRouter = Router();

tagRouter.get('/', findTags);
tagRouter.get('/:name', getTagByFullNameController);
tagRouter.post('/', authMiddleware, addTag);

module.exports = {
  tagRouter,
};
