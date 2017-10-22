'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      return yield ctx.render('home/index.tpl')
    }
    
  }
  return HomeController;
};
