var moonshine = require("moonshine-js"),
    settings = moonshine.settings,
    logger = moonshine.logFactory();

function CreateUserCommand(){

}

CreateUserCommand.prototype.execute = function(args,done){
    var argv = require("optimist")(args)
        .usage('Usage: moonshine createUser --username=[username] --password=[password]')
        .demand(['username','password'])
        .argv
    logger.info("creating user. username:" + argv.username + ";password:" + argv.password)
    var newUser = new moonshine.db.models.User({
        username:argv.username,
        password:argv.password
    })
    newUser.save(function(err){
        if (err) done(err)
        logger.info("user created succesfuly")
        done(null,true)
    })
}
module.exports = CreateUserCommand;