let path = require('path');
let fs = require('fs');
function route(handle ,pathname, response){
    console.log("About to route you request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);  
    }
    else if (pathname.match("\.css$")){
        let cssPath = path.join(__dirname, 'public', pathname);
        let cssStream = fs.createReadStream(cssPath);
        response.writeHead(200, {"Content-Type": "text/css"})
        cssStream.pipe(response)
    }else if (pathname.match('\.png$') || pathname.match('\.jpg$')){
        let imagePath = path.join(__dirname, 'public', pathname);
        let imageStream = fs.createReadStream(imagePath);
        response.writeHead(200, {"Content-Type": "text/png"});
        imageStream.pipe(response);
    }else if (pathname.match('\.js$')){
        let jsPath = path.join(__dirname, 'public', pathname);
        let jsStream = fs.createReadStream(jsPath)
        response.writeHead(200, {"Content-Type": "application/js"});
        jsStream.pipe(response);
 
    }
    else{
        console.log("No request found for "+ pathname);
        response.writeHead(404 ,{"Content-type":"text/html"});
        response.write("<h1>404 Not found</h1>");
        response.end();
    }
}
exports.route = route;