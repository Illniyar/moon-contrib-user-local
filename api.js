var moonshine = require("moonshine-js"),
	api = moonshine.api;

var resource = api.resources.User;

resource.post("/login/local/",require("passport").authenticate('local'),function(req,res){
    res.json(req.user)
})
