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
 * __User__: the user model has been enriched with the following methods.
    *__findByUsernameAndPassword__(username,password,callback): static Model method. Finds a user by given username and password (not encrypted).
	*__

* __*Angular modules*__:
 * __user.local__['/js/user.local.js'] : new authenticator named "local" is provided. Automatically registered once `user.local` module is dependend on.
