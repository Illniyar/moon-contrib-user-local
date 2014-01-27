Moonshine user local component
====================

Moon-contrib-user-local is an username/password authentication provider for [moon-contrib-user](https://github.com/Illniyar/moon-contrib-user).

###Moon-contrib-user-local

* __*Applicable settings*__:
 * __USER_LOCAL_ALGORITHM__: hashing algorithm to be used to hash passwords. --defaults to 'sha512'
 * __USER_LOCAL_SALTLENGTH__: length of random salt to be used for to hash passwords --defaults to 16
 * __USER_LOCAL_ITERATIONS__: number of times to hash the password. --defaults to 2
 * __USER_LOCAL_SECRET_TOKEN__: secret token to attach to password to increase password length (if secret token is not jepordized). 
 * __USER_LOCAL_MINIMUM_PASSWORD_LENGTH__: minimum length of password for password validation. --defaults to 8 
 
* __*Commands*__:
 * __createuser__: creates a new user with the given username and password. (use with `moonshine createuser --username=? --password=?)

* __*New Resources*__:
 * __"/users/login/local/"__: log in with username password (post with simple json).

* __*Model extensions*__:
 * __authorize__: you can add a static method to a model called _authorize_. All get/post/put requests on a resource for that model will first authorize using that method. 

   The method gets the following arguments:
    * _user_ - the user object.
    * _action_ - the type of action - "view","update" or "create"
    * _object_ - the object in question (a json object in case of view or create, and the actual object in update)
    * _change_ - a list of changes to be made (in case of update)
    
   The method should return a boolean value indicating if the user is authorized to perform this action.
 * __applyLimit__: you can add a static method to a model called _applyLimit_. If exists all REST requests to view a collection for the model will first go through that function to limit the returned object (usually done to limit a user to view only his own objects). 
   The method gets the following arguments:
    * _user_ - the user object.
    * _query_ - the Baucis query object to apply the limit on.


* __*Helper methods*__:
 * `require("moon-contrib-user").authorizeByUserRef` - a convienient factory method to create an authorize method that authorizes a user to act only on it's own object (assuming that object has a reference field called user).


* __*Angular modules*__:
 * __user.local__['/js/user.local.js'] : new authenticator named "local" is provided. Automatically registered once `user.local` module is dependend on.
