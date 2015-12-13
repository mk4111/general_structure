var handlers = module.exports = {};
var fs = require('fs');

var headers = {"content-type":"text/html"};

handlers.home = function (req,res) {
  var index = fs.readFileSync(__dirname + '/../public/index.html');
  res.writeHead(200, headers);
  res.end(index);
};

handlers.notFound = function (req,res) {
  res.writeHead(404, headers);
  res.end('NOT FOUND');
};

handlers.public = function (req,res) {
  var jsFile = fs.readFileSync(__dirname + '/../' + req.url);
  res.writeHead(200, {"content-type":"text/js"}); //change to get ext for all file types
  res.end(jsFile);
};

handlers.page2 = function (req,res) {
  var page2 = fs.readFileSync(__dirname + '/../public/page2.html');
  res.writeHead(200, headers);
  res.end(page2);
};
