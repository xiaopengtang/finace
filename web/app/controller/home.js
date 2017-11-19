'use strict';
const render = require('../../resource/component/main')

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
    	const html = yield render.default(ctx.url)
    	const user = ctx.session.user || null
    	const cdn = this.config.cdn || {}

      return yield ctx.render('home/index.tpl', {user, html, cdn})
    }
  }
  return HomeController;
};
