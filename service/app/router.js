'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // require('./router/default')(app);
  const { router, controller } = app;
  router.get('/default', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/', controller.home.index);
};
