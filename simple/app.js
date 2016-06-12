var router = require("./router.js");
//problem: We need a simple way to look at the user's badge count and JavaScript point from a web browser
//solution: Use Node.js to perfrom the profile look ups and server our template via HTTP

//1. Create a web server
const http = require('http');

const port = 3000;

const server = http.createServer(function(request, response){
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
  console.log(`Server running at http://${hostname}:${port}/`);
