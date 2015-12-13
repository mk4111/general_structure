var handlers = require('./handler.js');

var routes = {
  '/': handlers.home,
  '404': handlers.notFound,
  '/public': handlers.public,
  '/locationList': handlers.page2,
};

module.exports = function(req, res) {
  console.log(req.url);
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else if (req.url.match('/public')) {
    routes['/public'](req, res);
  } else {
    routes['404'](req, res);
  }
};
