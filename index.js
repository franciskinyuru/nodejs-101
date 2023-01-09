let server = require('./server');
let router = require('./route');
let requestHandlers = require('./requestHandlers')
let handle ={};
handle["/"] = requestHandlers.index;
handle["/index.html"] = requestHandlers.index;
handle["/portfolio.html"]=requestHandlers.portfolio;
server.start(router.route, handle);