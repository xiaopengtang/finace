'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * test(ctx){
    	return yield ctx.render('home/test.tpl')
    }
  }
  return HomeController;
};
