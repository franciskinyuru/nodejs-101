function route(handle ,pathname){
    console.log("About to route you request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();  
    }else{
        console.log("No request found for "+ pathname);
        return "404 Not found"
    }
}
exports.route = route;