var express = require ('express'); // used for the development web server
var path = require('path'); // used to handle the paths in the js application 
var open = require('open'); // used to open site in browser

var port = 3000; // the port intended to use 
var app = express(); // instance of express server

// tell express which routes it has to handle
app.get ('/', function (request,response) {
  // path is actually to get the path of the index.html 
  response.sendFile(path.join(__dirname,"../src/index.html"));
});
//__dirname is a pre-defined variable in the path package which we downloaded

// tell app to listen on port  -  with some error handling functions
app.listen (port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open -  package to open the website in the browser 
    open('http://localhost:' + port);
  }
});
