let http = require('http');
let url = require('url');
let Logger = require('./logger');
let logger = new Logger('Server');
let start = function (route, handle) {
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname + " has been received");
        logger.info('Request for '+pathname + " Has been received with the request methid"+ request.method)
        route(handle, pathname, response);
}
let PORT = process.env.PORT || 8000
http.createServer(onRequest).listen(8000);
logger.info(`Server has started on Port: ${PORT}`)
console.log(`Server has started on Port: ${PORT}`);
}
exports.start = start;
