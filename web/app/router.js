'use strict';

module.exports = app => {
  app.get('/*', 'home.index')
  app.get('/api/login', 'user.login')
  app.get('/api/loginout', 'user.loginout')
  app.get('/api/saveUserInfo', 'user.saveInfo')
};
