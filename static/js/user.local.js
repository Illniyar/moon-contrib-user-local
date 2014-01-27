(function(){
	var localModule = angular.module("user.local",["moon.angular","user.authentication"])
	localModule.config(["authenticationProvider",function(authenticationProvider){
		authenticationProvider.registerAuthenticator("local",function(authInfo,cb){
			angular.injector(["moon.angular","ng"]).invoke(["Restangular","$rootScope",function(Restangular,$rootScope){
				var ajaxCall = Restangular.all("users/login/local/").post(authInfo).then(function(user){
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