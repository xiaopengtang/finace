'use strict';

module.exports = app => {
  app.get(/^\/((?!api).)*$/, 'home.index')
  app.get('/api/login', 'user.login')
  app.get('/api/list', 'user.list')
  app.get('/api/detail', 'user.detail')
  app.get('/api/sendCode', 'user.sendCode')
  app.get('/api/loginStatus', 'user.loginStatus')
  app.get('/api/register', 'user.register')
  app.get('/api/forget', 'user.forget')
  app.get('/api/index', 'user.index')
  app.post('/api/loginout', 'user.loginout')
  app.post('/api/saveUserInfo', 'user.saveInfo')
};
