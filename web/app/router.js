'use strict';

module.exports = app => {
  app.get(/^\/((?!api).)*$/, 'home.index')
  app.get('/api/login', 'user.login')
  app.get('/api/loginStatus', 'user.loginStatus')
  app.post('/api/loginout', 'user.loginout')
  app.post('/api/saveUserInfo', 'user.saveInfo')
};
