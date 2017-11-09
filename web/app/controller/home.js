'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
    	const user = ctx.session.user || null
      return yield ctx.render('home/index.tpl', {user})
    }
    
  }
  return HomeController;
};
