
/*
 * GET users listing.
 */

exports.user = function(req, res){
  res.send("respond with a resource, and user is: " + req.params.user);
};
exports.check = function(req, res, next) {
	console.log('checking out, please wait for a second');
	next();
}