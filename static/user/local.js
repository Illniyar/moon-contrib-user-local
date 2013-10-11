(function(){
	var localModule = angular.module("user.local",["ng","user.authentication"])
	localModule.config(["authenticationProvider",function(authenticationProvider){
		authenticationProvider.registerAuthenticatior("local",function(authInfo,cb){
			angular.injector(["ng"]).invoke(["$http","$rootScope",function($http,$rootScope){
				var ajaxCall = $http({
					url: "/api/v1/users/login/local/",
					method: "POST",
					authentication: this,
					data: { username: authInfo.username, password: authInfo.password}
				});
				ajaxCall.success(function (data, status, headers, config) {
					cb(null,data)
				}).error(function (data, status) {
					cb(new Error('status: ' + status + ';failed to login because of:' + data))
				});
                if(!$rootScope.$$phase) $rootScope.$apply()
			}])
		})
	}])
})()