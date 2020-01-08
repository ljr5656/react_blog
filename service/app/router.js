'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default');
  const { router, controller } = app;
  router.get('/default', controller.default.home.index);
  router.get('/', controller.home.index);
};
