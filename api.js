var moonshine = require("moonshine-js"),
	api = moonshine.api;

var resource = api.resources.User;

resource.post("/login/local/",moonshine.user.auth.authenticate('local'),function(req,res){
    res.json(req.user)
})
