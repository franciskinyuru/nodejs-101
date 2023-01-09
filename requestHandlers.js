let exec = require('child_process').exec;
function index(){
    console.log("Request handler for index was called");
        var content = "empty";
        exec("ls -lah", function(error, stdout, stderr){
            content = stdout;
        });
    return content
}

function portfolio(){
    console.log("Request handler for portfolio was called");
    return "This are some of our projects. "
}

exports.index = index;
exports.portfolio = portfolio;