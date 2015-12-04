//https://www.youtube.com/watch?v=ltdtm6_Mjjc
var flo = require('fb-flo'),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

var server = flo('./app/', {
  port: 8888,
  glob: ['**/*.js', '**/*.css', '**/*.html']
}, resolver);

server.once('ready', function () {
  console.log('Ready!');
});

function resolver(filepath, callback) {
  console.log(filepath, 'is changed at', new Date());
  callback({
    resourceURL: 'app/' + filepath,
    contents: fs.readFileSync('app/' + filepath),
    reload: filepath.indexOf('.js') > -1 || filepath.indexOf('.html') > -1
  });
}
