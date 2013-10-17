(function(){
	var localModule = angular.module("user.local",["api.moonbridge","user.authentication"])
	localModule.config(["authenticationProvider",function(authenticationProvider){
		authenticationProvider.registerAuthenticatior("local",function(authInfo,cb){
			angular.injector(["api.moonbridge","restangular","ng"]).invoke(["moonbridge","$rootScope",function(moonbridge,$rootScope){
				var ajaxCall = moonbridge.all("users/login/local/").post(authInfo).then(function(user){
                    cb(null,user);
                },function(response){
                    var err = new Error("failed to login with local strategy- status:" + response.status + ". message:" + response.body )
                    cb(err)
                })
                if(!$rootScope.$$phase) $rootScope.$apply()
			}])
		})
	}])
})()