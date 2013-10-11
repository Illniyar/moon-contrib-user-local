var moonshine = require("moonshine-js"),
	Schema = moonshine.persistence.Schema,
    settings = moonshine.settings,
    passport = require("passport")

var passwordHash = require('password-hash');
var LocalStrategy = require('passport-local').Strategy;

var User = moonshine.persistence.getSchema("User")
var options = {
	algorithm:settings.USER_LOCAL_ALGORITHM,
	saltLength:settings.USER_LOCAL_SALTLENGTH,
	iterations:settings.USER_LOCAL_ITERATIONS
}
User.add({
	username:{type:String,unique:true},
	password: {type:String,select:false,set: function(value){return passwordHash.generate(settings.USER_LOCAL_SECRET_TOKEN + value,options)}}
})
User.methods.verifyPassword =function(toVerify){
	return passwordHash.verify(settings.USER_LOCAL_SECRET_TOKEN + toVerify,this.password);
}
User.statics.findByUsernameAndPassword = function(username,password,cb) {
	this.findOne({username:username}).select("+password").exec(function(err,user){
		try {
			if (err) return cb(err);
			if (!user) return cb(null,false,{ message: 'Incorrect username.' });
			if (!user.verifyPassword(password)) return cb(null,false,{ message: 'Incorrect password.' });
			var uObj = user.toObject();
			uObj.password = undefined;
			cb(null,uObj)
		} catch(err){
			cb(err)
		}
	});
}
passport.use(new LocalStrategy(function(username,password,done){
	moonshine.persistence.models.User.findByUsernameAndPassword(username,password,done);
}))