'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api hi';
  }
  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
             'article.title as title,' +
             'article.introduce as introduce,' +
             'article.addTime as addTime,' +
             'article.view_count as view_count ,' +
             '.type.typeName as typeName ' +
             'FROM article LEFT JOIN type ON article.type_id = type.Id';
    const result = await this.app.mysql.query(sql);
    this.ctx.body = result;
  }
}

module.exports = HomeController;
