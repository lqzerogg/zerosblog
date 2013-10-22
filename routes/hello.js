/**
 * get hello world
 */
exports.hello = function(req, res) {
	res.send('The time is' + (new Date()).toString());
};