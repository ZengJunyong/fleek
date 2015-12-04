var flo = require('fb-flo'),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

var server = flo('./app/', {
  port: 8888,
  glob: ['**/*.js', '**/*.css']
}, resolver);

server.once('ready', function () {
  console.log('Ready!');
});

function resolver(filepath, callback) {
  callback({
    resourceURL: 'app/' + filepath,
    contents: fs.readFileSync('app/' + filepath)
  });
}
