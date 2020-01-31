/* eslint-disable */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // require('./router/default')(app);
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth(); 

  router.get('/default', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.home.getListById);
  router.get('/', controller.home.index);

  router.get('/admin', controller.admin.main.index);
  router.post('/admin/checkOpenId', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
};
