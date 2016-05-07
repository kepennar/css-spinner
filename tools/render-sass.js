var fs = require('fs');
var mkdirp = require('mkdirp');

var sass = require('node-sass');

sass.render({
  file: 'src/spinner.scss',
  includePaths: ['node_modules/mathsass/dist']
}, function(err, result) {
  if (err) {
    return console.error('Error rendering SCSS', err);
  }
  mkdirp('dist', function(err) {
    if (err) {
      return console.error('Error writing CSS to dist/spinner.css', err);
    }
    fs.writeFile('dist/spinner.css', result.css, function(err) {
      if (err) {
        return console.error('Error writing CSS to dist/spinner.css', err);
      }
    });
  });
});
