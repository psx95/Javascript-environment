import express from 'express'; // used for the development web server
import path from 'path'; // used to handle the paths in the js application 
import open from 'open'; // used to open site in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000; // the port intended to use 
const app = express(); // instance of express server
const compiler = webpack(config); // get the instace of the webpack's compiler 

// integrating webpack with express server
app.use (require ('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// tell express which routes it has to handle
app.get ('/', function (request,response) {
  // path is actually to get the path of the index.html 
  response.sendFile(path.join(__dirname,"../src/index.html"));
});
//__dirname is a pre-defined variable in the path package which we downloaded (Pre-defined in NODE)

// tell app to listen on port  -  with some error handling functions
app.listen (port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open -  package to open the website in the browser 
    open('http://localhost:' + port);
  }
});
