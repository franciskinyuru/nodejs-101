let http = require('http');
let url = require('url');
let start = function (route, handle) {
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname + " has been received");
        route(handle, pathname, response);
}
http.createServer(onRequest).listen(8000);
console.log("Server has started");
}
exports.start = start;
