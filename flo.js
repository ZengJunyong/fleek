var flo = require('fb-flo'),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

var server = flo('./app/', {
  port: 8888,
  dir: './app/',
  glob: ['./app/**/*.js', './app/**/*.css']
}, resolver);

server.once('ready', function() {
  console.log('Ready!');
});

function resolver(filepath, callback) {
  exec('make', function (err) {
    if (err) throw err;
    callback({
      resourceURL: 'app' + path.extname(filepath),
      contents: fs.readFileSync('app' + path.extname(filepath)).toString()
    })
  });
}
