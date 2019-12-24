var fs = require('fs');
var path = require('path');

module.exports = function (app) {
  var dir = path.join(__dirname, '..', 'routes');
  module.exports.SetRoutes(app, dir);
}
module.exports.SetRoutes = function (app, dir) {
  fs.readdirSync(dir).forEach(function (name) {
    var filepath = path.join(dir, name);
    console.log(filepath)
    if (fs.statSync(filepath).isFile() && filepath.indexOf('.js') != -1) {
      var filedirname = filepath.replace('.js', '');
      var uri = filedirname.replace(path.join(__dirname, '..', 'routes'), '');
      var routeObj = require(filedirname);
      var re = new RegExp("\\\\", "g");
      let newUri = uri.replace(re, "/")
      console.log(newUri)
      try {
        app.use(newUri, routeObj)
        // console.log(newUri)
      } catch (e) {
        console.error(e, filepath)
      }
    } else {
      module.exports.SetRoutes(app, filepath);
    }
  })
}