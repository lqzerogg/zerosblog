/**
 * @fileOverview 绑定请求
 * @author Zero    lqzerogg@gmail.com
 */

var util = require('util');

var routes = {
	'index': require('./index').index,
	'login': require('./login').login,
	'doLogin': require('./login').doLogin,
	'logout': require('./logout').logout,
	'reg': require('./reg').reg,
	'doReg': require('./reg').doReg,
	'post': require('./post').post,
	'user': require('./user').user
}

function routing(app) {
	app.get('/', routes.index);
	app.get('/u/:user', routes.user);
	app.post('/post', routes.post);
	app.get('/reg', routes.reg);
	app.post('/doReg', routes.doReg);
	app.get('/login', routes.login);
	app.post('/doLogin', routes.doLogin);
	app.get('/logout', routes.logout);
}

exports.routing = routing;