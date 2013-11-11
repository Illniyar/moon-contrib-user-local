module.exports.config = function(settings) {

	//local auth strategy password settings
	settings.USER_LOCAL_ALGORITHM = "sha512"
	settings.USER_LOCAL_SALTLENGTH = 16
	settings.USER_LOCAL_ITERATIONS = 2
	settings.USER_LOCAL_SECRET_TOKEN = "changeMe"
    settings.USER_LOCAL_MINIMUM_PASSWORD_LENGTH=8
}
module.exports.requiredComponents = [
	"moon-contrib-user"
]