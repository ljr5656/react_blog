/* eslint-disable */
'use strict';

const Controller = require('egg').Controller;

class MainColltroller extends Controller {
  async index() {
    this.ctx.body = 'hi,api';
  }
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password =  '" + password + "'";
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      let openId = new Date().getTime();
      this.ctx.session.openId = { 'openId': openId };
      this.ctx.body = { 'data': '登录成功', 'openId': openId };
    } else {
      this.ctx.body = { 'data': '登录失败' };
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }

  // async addArticle() {
  //   let tmpArticle = this.ctx.request.body;
  //   const result = await this.app.mysql.insert('article', tmpArticle);
  //   const insertSuccess = result.affectedRows === 1;
  //   const insertId = result.insertId;

  //   this.ctx.body={
  //     isSuccess: insertSuccess,
  //     insertId: insertId,
  //   }
  // }
  //添加文章
  async addArticle() {

    let tmpArticle = this.ctx.request.body;
    // tmpArticle.
    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId: insertId
    }
  }

  //获得文章列表
  async getArticleList() {

    let sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'ORDER BY article.id DESC '
    const resList = await this.app.mysql.query(sql)
    this.ctx.body = { list: resList }
  }

  //删除文章
  async delArticle() {
    let id = this.ctx.params.id
    const res = await this.app.mysql.delete('article', { 'id': id })
    this.ctx.body = { data: res }
  }
}

module.exports = MainColltroller;
