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
      this.ctx.session.openId = {'openId':openId};
      this.ctx.body = {'data': '登录成功', 'openId':openId};
    } else {
      this.ctx.body = {'data': '登录失败'};
    }
  }
}

module.exports = MainColltroller;
