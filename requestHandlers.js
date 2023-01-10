let fs = require('fs');
let Logger = require('./logger');
let logger = new Logger('RequestHandlers');
function index(response){
    logger.info("Request handler for index was called")
    console.log("Request handler for index was called");
    fs.readFile('./public/index.html', function(error, data){
        if(error){
            console.log(error);
        }
        response.writeHead(200,{"Content-type":"text/html"});
        response.write(data);
        response.end();

    });
                 
}

function portfolio(response){
    logger.info("Request handler for portfolio was called")
    console.log("Request handler for portfolio was called");
    response.writeHead(200,{"Content-type":"text/plain"});
    response.write("This are some of our projects.");
    response.end();
}

exports.index = index;
exports.portfolio = portfolio;